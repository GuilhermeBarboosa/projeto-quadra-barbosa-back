const database = require('../models');

class timecampeonatoController {
    static async getAll(req, res) {
        try {
            const getlAllTimeTimeCampeonato = await database.time_campeonato.findAll({
                where: {
                    actived: true,
                },
                include: [{
                    model: database.times,
                    as: 'timeResponse',
                },
                {
                    model: database.campeonatos,
                    as: 'campeonatoResponse',
                }
                ]
            });
            return res.status(200).json(getlAllTimeTimeCampeonato);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const getByIdTimeTimeCampeonato = await database.time_campeonato.findOne({
                where: {
                    id: Number(id), actived: true,
                },
                include: [{
                    model: database.times,
                    as: 'timeResponse',
                },
                {
                    model: database.campeonatos,
                    as: 'campeonatoResponse',
                }
                ]
            });
            return res.status(200).json(getByIdTimeTimeCampeonato);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getTimes(req, res) {
        try {
            const { id } = req.params;

            console.log(id)
            const getByIdTimeTimeCampeonato = await database.time_campeonato.findAll({
                where: {
                    campeonato: Number(id), 
                    actived: true,
                },
                include: [{
                    model: database.times,
                    as: 'timeResponse',
                },
                {
                    model: database.campeonatos,
                    as: 'campeonatoResponse',
                }
                ]
            });
            return res.status(200).json(getByIdTimeTimeCampeonato);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async create(req, res) {
        try {
            const newTimeTimeCampeonato = req.body;

            console.log(newTimeTimeCampeonato)

            const getByIdTimeTimeCampeonato = await database.time_campeonato.findOne({
                where: {
                    campeonato: Number(newTimeTimeCampeonato.campeonato),
                    time: Number(newTimeTimeCampeonato.time),
                    actived: true,
                },
            });

            if(getByIdTimeTimeCampeonato){
                return res.status(500).json("Time já cadastrado no campeonato");
            }

            const createTimeTimeCampeonato = await database.time_campeonato.create(newTimeTimeCampeonato);
            return res.status(200).json(createTimeTimeCampeonato);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const updateTimeTimeCampeonato = req.body;

            const getByIdTimeTimeCampeonato = await database.time_campeonato.findOne({
                where: {
                    campeonato: Number(newTimeTimeCampeonato.campeonato),
                    time: Number(newTimeTimeCampeonato.time),
                    actived: true,
                },
            });

            if(getByIdTimeTimeCampeonato){
                return res.status(500).json("Time já cadastrado no campeonato");
            }

            await database.time_campeonato.update(updateTimeTimeCampeonato, { where: { id: Number(id) } });
            const getTimeTimeCampeonato = await database.time_campeonato.findOne({ where: { id: Number(id) } });
            return res.status(200).json(getTimeTimeCampeonato);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            const deleteTimeCampeonato = await database.time_campeonato.findOne({ where: { id: Number(id) } });

            let deleteDTO = JSON.parse(JSON.stringify(deleteTimeCampeonato));
            deleteDTO.actived = false;

            await database.time_campeonato.update(deleteDTO, { where: { id: Number(id) } });
            return res.status(200).json(deleteDTO);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = timecampeonatoController;