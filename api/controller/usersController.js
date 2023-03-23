const database = require('../models');

class usersController {
    static async getAll(req, res) {
        try{
            const getlAllUsers = await database.users.findAll({
                where: { actived: true }
            });
            return res.status(200).json(getlAllUsers);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async getById(req, res) {
        try{
            const { id } = req.params;
            const getByIdUsers = await database.users.findOne({
                where: { id: Number(id), actived: true }
            });
            return res.status(200).json(getByIdUsers);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async create(req, res) {
        try{
            const newUsers = {...req.body, roles: Number(req.body.roles)};
            const createUsers = await database.users.create(newUsers);
            return res.status(200).json(createUsers);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async update(req, res) {
        try{
            const { id } = req.params;
            const updateUsers = req.body;
            await database.users.update(updateUsers, { where: { id: Number(id) } });
            const getUsers = await database.users.findOne({ where: { id: Number(id) } });
            return res.status(200).json(getUsers);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async delete(req, res) {
        try{
            const { id } = req.params;
            const deleteUser = await database.users.findOne({ where: { id: Number(id) } });
            deleteUser.actived = false;
            await database.users.update(deleteUser, { where: { id: Number(id) } });
            return res.status(200).json(deleteUser);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = usersController;