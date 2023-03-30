const database = require('../models');

class jogadoresController {
    static async getAll(req, res) {
        try {
            const getlAllJogadores = await database.jogadores.findAll({
                where: { actived: true },
                include: [{
                    model: database.users,
                    as: "userResponse",
                    attributes: ['id', 'nome', 'email']
                },
                {
                    model: database.posicoes,
                    as: "posicaoResponse"
                },
                {
                    model: database.times,
                    as: "timeResponse"
                }]
            });
            return res.status(200).json(getlAllJogadores);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const getByIdJogadores = await database.jogadores.findOne({
                where: { id: Number(id), actived: true, },
                include: [{
                    model: database.users,
                    as: "userResponse",
                    attributes: ['id', 'nome', 'email']
                },
                {
                    model: database.posicoes,
                    as: "posicaoResponse"
                },
                {
                    model: database.times,
                    as: "timeResponse"
                }] 
            });
            return res.status(200).json(getByIdJogadores);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async create(req, res) {
        try {
            const newJogadores = req.body;
            const createJogadores = await database.jogadores.create(newJogadores);
            return res.status(200).json(createJogadores);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const updateJogadores = req.body;
            await database.jogadores.update(updateJogadores, { where: { id: Number(id) } });
            const getJogadores = await database.jogadores.findOne({ where: { id: Number(id) } });
            return res.status(200).json(getJogadores);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            const deleteJogadore = await database.jogadores.findOne({ where: { id: Number(id) } });
        

            let deleteDTO = JSON.parse(JSON.stringify(deleteJogadore));
            deleteDTO.actived = false;

            await database.jogadores.update(deleteDTO, { where: { id: Number(id) } });
            return res.status(200).json(deleteJogadore);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


    static async getByJogadorUser(req, res) {
        try {
            const { id } = req.params;

            console.log(id);
            const getByIdJogadores = await database.jogadores.findOne({
                where: { user: Number(id), actived: true, },
                include: [{
                    model: database.users,
                    as: "userResponse",
                    attributes: ['id', 'nome', 'email', 'idade']
                },
                {
                    model: database.posicoes,
                    as: "posicaoResponse"
                },
                {
                    model: database.times,
                    as: "timeResponse"
                }] 
            });

            if(getByIdJogadores == null)
                return res.status(200).json({message: "error"});

            return res.status(200).json(getByIdJogadores);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = jogadoresController;