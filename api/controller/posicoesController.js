const database = require('../models');
const { Op } = require("sequelize");

class posicoesController {
    static async getAll(req, res) {
        try{
            const getlAllPosicoes = await database.posicoes.findAll({});
            return res.status(200).json(getlAllPosicoes);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async getById(req, res) {
        try{
            const { id } = req.params;
            const getByIdPosicoes = await database.posicoes.findOne({
                where: { id: Number(id) }
            });
            return res.status(200).json(getByIdPosicoes);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = posicoesController;