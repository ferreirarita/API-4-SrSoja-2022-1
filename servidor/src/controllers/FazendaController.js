const Fazenda = require('../models').models.Fazenda

class FazendaController {
    // Adiciona/atualiza uma Fazenda
    async addFazenda(req, res) {
        let { 
            fzd_id, prd_id, fzd_nome, fzd_cep, 
            fzd_estado, fzd_municipio 
        } = req.body

        if(typeof fzd_id === 'undefined' || fzd_id == 0) {
            return await Fazenda.create({
                prd_id, fzd_nome, fzd_cep, 
                fzd_estado, fzd_municipio 
            }).then(async () => 
                res.status(200).json({ message: `Fazenda ${fzd_nome} adicionada.` })
            ).catch((err) => 
                res.status(400).json({ error: err.message })
            )
        }
        else {
            return await Fazenda.findOne({
                where: { fzd_id }
            }).then(async (fazenda) => {
                if(fazenda){
                    await fazenda.update({ 
                        fzd_id, prd_id, fzd_nome, fzd_cep, 
                        fzd_estado, fzd_municipio 
                    })
                    return res.status(200).json({ message: `Fazenda ${fzd_nome} atualizada.` })
                }
                return res.status(400).json({ error: 'Fazenda não encontrada.' })    
            
            }).catch((err) => 
                res.status(400).json({ error: err.message })
            )
        }
    }

    // Retorna uma ou mais Fazendas
    async getFazenda(req, res) {
        let fzd_id = req.query.fzd_id
        let prd_id = req.query.prd_id

        if(typeof prd_id !== 'undefined' && prd_id != 0){
            return await Fazenda.findAll({
                where: { prd_id },
                attributes: [
                    'fzd_id', 'fzd_nome', 'fzd_cep', 'fzd_estado', 'fzd_municipio'
                ],
                order: [['fzd_nome', 'DESC']]
            }).then(async (fazendas) => 
                res.status(200).json({ fazendas })
            ).catch((err) =>
                res.status(400).json({ error: err.message })
            )
        }
        else if(typeof fzd_id !== 'undefined' && fzd_id != 0) {
            return await Fazenda.findOne({
                where: { fzd_id },
                attributes: [
                    'fzd_id', 'fzd_nome', 'fzd_cep', 'fzd_estado', 'fzd_municipio'
                ]
            }).then(async (r) => {
                const {
                    fzd_id, fzd_nome, fzd_cep, 
                    fzd_estado, fzd_municipio 
                } = r.get()

                return res.status(200).json({
                    fzd_id, fzd_nome, fzd_cep, 
                    fzd_estado, fzd_municipio 
                })
            }).catch((err) => 
                res.status(400).json({ error: err.message })
            )
        }
        return await res.status(400).json({ error: 'Nenhuma Fazenda informada.' })
    }

    async delFazenda(req, res) {
        let { fzd_id } = req.body

        return await Fazenda.findOne({
            where: { fzd_id }
        }).then(async (fazenda) => {
            if(fazenda !== null) {
                let { fzd_nome } = fazenda.get()
                return await fazenda.destroy().then(() => 
                    res.status(200).json({ message: `Fazenda ${fzd_nome} deletada.` })
                )
            }
            return res.status(400).json({ error: 'Fazenda não encontrada.' })
        
        }).catch((err) => {
            return res.status(400).json({ error: err.message })
        })
    }
}
module.exports = FazendaController