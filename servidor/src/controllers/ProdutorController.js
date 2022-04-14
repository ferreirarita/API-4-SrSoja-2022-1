const Produtor = require('../models').models.Produtor

class ProdutorController {
    // Adiciona/atualiza um Produtor
    async addProdutor(req, res) {
        let { prd_id, prd_nome, prd_email, prd_senha } = req.body
        if(typeof prd_id === 'undefined' || prd_id == 0){
            return await Produtor.create({
                prd_nome, prd_email, prd_senha
            }).then(async (produtor) => {
                const { prd_nome } = produtor.get()
                return res.status(200).json({ message: `Produtor ${prd_nome} adicionado.` })
            }).catch((err) => {
                return res.status(400).json({ error: err.message })
            })
        }
        else {
            return await Produtor.findOne({
                where: { prd_id }
            }).then(async (produtor) => {
                if(produtor) {
                    await produtor.update({ prd_nome, prd_email, prd_senha })
                    return res.status(200).json({ message: `Produtor ${prd_nome} atualizado.` })
                }
                return res.status(400).json({ error: 'Produtor não encontrado.' })    

            }).catch((err) =>
                res.status(400).json({ error: err.message })
            )
        }
    }

    // Retornar um ou mais Produtores
    async getProdutor(req, res) {
        let prd_id = req.query.prd_id

        if(typeof prd_id !== 'undefined' && prd_id != 0) {
            return await Produtor.findOne({
                where: { prd_id },
                attributes: [
                    'prd_id', 'prd_nome', 'prd_email', 'prd_senha'
                ]
            }).then(async (r) => {
                const { prd_id, prd_nome, prd_email, prd_senha } = r.get()
                return res.status(200).json({ prd_id, prd_nome, prd_email, prd_senha })
            }).catch((err) => {
                return res.status(400).json({ error: err.message })
            })
        }
        else {
            return await Produtor.findAll({
                attributes: [
                    'prd_id', 'prd_nome', 'prd_email', 'prd_senha'
                ],
                order: [['prd_nome', 'DESC']]
            }).then(async (produtores) => {
                return res.status(200).json({ produtores })
            }).catch((err) => {
                return res.status(400).json({ error: err.message })
            })
        }
    }

    // Remove um Produtor
    async delProdutor(req, res) {
        let { prd_id } = req.body

        return await Produtor.findOne({
            where: { prd_id }
        }).then(async (produtor) => {
            if(produtor !== null) {
                const { prd_nome } = produtor.get()
                return await produtor.destroy().then(() => {
                    res.status(200).json({ message: `Produtor ${prd_nome} deletado.` })
                })
            }
            return res.status(400).json({ error: 'Produtor não encontrado.' })
            
        }).catch((err) => {
            return res.status(400).json({ error: err.message })
        })
    }

}
module.exports = ProdutorController