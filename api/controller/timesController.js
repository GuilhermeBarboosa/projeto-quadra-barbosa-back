const database = require('../models');

class timesController {
    static async getAll(req, res) {
        try{
            const getlAllTimes = await database.times.findAll({
                where: { actived: true }
            });
            return res.status(200).json(getlAllTimes);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async getById(req, res) {
        try{
            const { id } = req.params;
            const getByIdTimes = await database.times.findOne({
                where: { id: Number(id), actived: true }
            });
            return res.status(200).json(getByIdTimes);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async create(req, res) {
        try{
            const newTimes = req.body;

            console.log(newTimes)

            const createTimes = await database.times.create(newTimes);
            return res.status(200).json(createTimes);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async update(req, res) {
        try{
            const { id } = req.params;
            const updateTimes = req.body;
            await database.times.update(updateTimes, { where: { id: Number(id) } });
            const getTimes = await database.times.findOne({ where: { id: Number(id) } });
            return res.status(200).json(getTimes);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async delete(req, res) {
        try{
            const { id } = req.params;

            const deleteTime = await database.times.findOne({ where: { id: Number(id) } });

            let deleteDTO = JSON.parse(JSON.stringify(deleteTime));
            deleteDTO.actived = false;

            await database.times.update(deleteDTO, { where: { id: Number(id) } });
            return res.status(200).json(deleteDTO);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = timesController;