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
                    model: database.time,
                    as: 'time',
                },
                {
                    model: database.campeonato,
                    as: 'campeonato',
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