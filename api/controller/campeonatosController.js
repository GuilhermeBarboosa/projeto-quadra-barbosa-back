const database = require('../models');

class campeonatosController {
    static async getAll(req, res) {
        try{

            console.log(req.userId + ' fez chamada');
            const getlAllCampeonatos = await database.campeonatos.findAll({
                where: { actived: true }
            });
            return res.status(200).json(getlAllCampeonatos);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async getById(req, res) {
        try{
            const { id } = req.params;
            const getByIdCampeonatos = await database.campeonatos.findOne({
                where: { id: Number(id), actived: true }
            });
            return res.status(200).json(getByIdCampeonatos);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async create(req, res) {
        try{
            const newCampeonatos = req.body;
            const createCampeonatos = await database.campeonatos.create(newCampeonatos);
            return res.status(200).json(createCampeonatos);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async update(req, res) {
        try{
            const { id } = req.params;
            const updateCampeonatos = req.body;
            await database.campeonatos.update(updateCampeonatos, { where: { id: Number(id) } });
            const getCampeonatos = await database.campeonatos.findOne({ where: { id: Number(id) } });
            return res.status(200).json(getCampeonatos);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async delete(req, res) {
        try{
            const { id } = req.params;
            const deleteCampeonato = await database.campeonatos.findOne({ where: { id: Number(id) } });

            let deleteDTO = JSON.parse(JSON.stringify(deleteCampeonato));
            deleteDTO.actived = false;

            await database.campeonatos.update(deleteDTO, { where: { id: Number(id) } });
            return res.status(200).json(deleteDTO);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = campeonatosController;