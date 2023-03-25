const database = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklist = [];
require("dotenv").config();

class usersController {
    static async getAll(req, res) {
        try {
            const getlAllUsers = await database.users.findAll({
                where: { actived: true },
                include: {
                    model: database.roles,
                    as: "roleResponse"
                }
            });
            return res.status(200).json(getlAllUsers);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const getByIdUsers = await database.users.findOne({
                where: { id: Number(id), actived: true },
                include: [{
                    model: database.roles,
                    as: "roleResponse"
                }]
            });
            return res.status(200).json(getByIdUsers);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async create(req, res) {
        try {
            const newUsers = { ...req.body, roles: Number(req.body.roles) };

            const userExists = await database.users.findOne({
                where: {
                    email: newUsers.email,
                    actived: true
                }
            });

            if (userExists) {
                return res.status(400).json("Usuário já cadastrado!");
            }

            newUsers.senha = await bcrypt.hashSync(newUsers.senha, 10);

            const createUsers = await database.users.create(newUsers);
            return res.status(200).json(createUsers);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const updateUsers = req.body;
            await database.users.update(updateUsers, { where: { id: Number(id) } });
            const getUsers = await database.users.findOne({ where: { id: Number(id) } });
            return res.status(200).json(getUsers);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            const deleteUser = await database.users.findOne({ where: { id: Number(id) } });
            deleteUser.actived = false;
            await database.users.update(deleteUser, { where: { id: Number(id) } });
            return res.status(200).json(deleteUser);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getLogin(req, res) {
        try {
            const { email } = req.body.email;
            const getByIdUsers = await database.users.findOne({
                where: {
                    email: {
                        [database.Sequelize.Op.like]: `%${req.body.email}%`
                    },
                    actived: true
                },
                include: [{
                    model: database.roles,
                    as: "roleResponse"
                }]
            });

            if (!getByIdUsers) {
                return res.status(401).json("Usuário não encontrado!");
            }

            if (await bcrypt.compare(req.body.senha, getByIdUsers.senha)) {

                const token = jwt.sign(
                    { userId: getByIdUsers.id, role: getByIdUsers.roleResponse.role},
                    process.env.JWT_SECRET,
                    { expiresIn: "1h" });
                return res.json({ auth: true, token })
                
            } else {
                return res.status(401).json("Senha incorreta!");
            }

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async logout(req, res) {
        blacklist.push(req.headers['x-access-token']);
        res.status(200).send("Logout realizado com sucesso!");
    }

    static async verifyToken(req, res, next) {

        const token = req.headers['x-access-token'];

        const index = blacklist.indexOf(item => item === token);

        if (index !== -1) return res.status(401).json({ auth: false, message: 'Token invalide.' });

        if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
        
        jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
            if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

            req.userId = decoded.userId;
            console.log(decoded)
            req.role = decoded.role;
            next();
        });
    }

}



module.exports = usersController;