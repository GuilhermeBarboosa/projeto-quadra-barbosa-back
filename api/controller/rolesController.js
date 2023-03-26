const database = require('../models');
const { Op } = require("sequelize");

class rolesController {
    static async getAll(req, res) {
        try{
            const getlAllRoles = await database.roles.findAll({
                where: {
                    id: {[Op.ne]: 1},
                  }
            });
            return res.status(200).json(getlAllRoles);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async getById(req, res) {
        try{
            const { id } = req.params;
            const getByIdRoles = await database.roles.findOne({
                where: { id: Number(id) }
            });
            return res.status(200).json(getByIdRoles);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = rolesController;