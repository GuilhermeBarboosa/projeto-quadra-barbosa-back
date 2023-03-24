const database = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

            // console.log(req.body.email);
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

            if (await bcrypt.compare(req.body.senha, getByIdUsers.senha)) {
                let token = jwt.sign(
                    { id: getByIdUsers.id, nome: getByIdUsers.nome, idade: getByIdUsers.idade, role: getByIdUsers.roleResponse.role },
                    process.env.JWT_SECRET,
                    { expiresIn: 300 });
                return res.json({ auth: true, token })
                // return res.status(200).json(getByIdUsers);
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

    static async verifyToken(req, res) {

        let token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

        jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
            if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

            req.userId = decoded.id;
            res.status(200).json(decoded);
        });
    }
}

module.exports = usersController;