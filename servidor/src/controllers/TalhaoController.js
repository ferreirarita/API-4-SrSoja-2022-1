const { models, sequelize } = require('../models')
const Talhao = models.Talhao
const Area_Talhao = models.Area_Talhao
const Talhao_Saude = models.Talhao_Saude

class TalhaoController {

    // Adiciona/atualiza um Talhão e sua área
    async addTalhao(req, res) {
        let {
            tlh_id, tlh_apelido, tlh_media_producao,
            fzd_id, latitude, longitude, tlh_saude
        } = req.body

        if(typeof tlh_id === 'undefined' || tlh_id == 0) {
            return await Talhao.create({
                tlh_apelido, tlh_media_producao,
                fzd_id, tlh_saude
            }).then(async (talhao) => {
                if(talhao) {
                    let { tlh_id } = talhao.get()
                    return await Area_Talhao.create({
                        latitude, longitude, tlh_id
                    }).then(async () => 
                        res.status(200).json({ message: `Talhão ${tlh_apelido} adicionado.` })
                    ).catch((err) => 
                        res.status(400).json({ error: err.message })
                    )
                }
                return res.status(400).json({ error: 'Falha ao salvar o Talhão.' })
            
            }).catch((err) => 
                res.status(400).json({ error: err.message })
            )
        }
        else {
            return await Talhao.findOne({
                where: { tlh_id }
            }).then(async (talhao) => {
                if(talhao){
                    await talhao.update({ 
                        tlh_id, tlh_apelido, tlh_media_producao,
                        fzd_id, tlh_saude
                    })

                    //let { tlh_id } = talhao.get()
                    await Area_Talhao.findOne({
                        where: { tlh_id }
                    }).then(async (area) => {
                        await area.update({
                            latitude, longitude
                        }).catch((err) => 
                            res.status(400).json({ error: err.message })
                        )
                    })

                    return res.status(200).json({ message: `Talhão ${tlh_apelido} atualizado.` })
                }
                return res.status(400).json({ error: 'Talhão não encontrado.' })    
            
            }).catch((err) => 
                res.status(400).json({ error: err.message })
            )
        }
    }

    // Retorna um ou mais Talhões
    async getTalhao(req, res) {
        let tlh_id = req.query.tlh_id
        let fzd_id = req.query.fzd_id

        if(typeof fzd_id !== 'undefined' && fzd_id != 0){
            return await Talhao.findAll({
                where: { fzd_id },
                attributes: [
                    'tlh_id', 'tlh_apelido', 'tlh_media_producao',
                    'fzd_id', 'tlh_saude'
                ],
                order: [['tlh_apelido', 'DESC']]
            }).then(async (talhoes) => 
                res.status(200).json({ talhoes })
            ).catch((err) =>
                res.status(400).json({ error: err.message })
            )
        }
        else if(typeof tlh_id !== 'undefined' && tlh_id != 0) {
            return await Talhao.findOne({
                where: { tlh_id },
                attributes: [
                    'tlh_id', 'tlh_apelido', 'tlh_media_producao',
                    'fzd_id', 'tlh_saude'
                ]
            }).then(async (r) => {
                const {
                    tlh_id, tlh_apelido, tlh_media_producao,
                    fzd_id, tlh_saude
                } = r.get()

                return res.status(200).json({
                    tlh_id, tlh_apelido, tlh_media_producao,
                    fzd_id, tlh_saude
                })
            }).catch((err) => 
                res.status(400).json({ error: err.message })
            )
        }
        return await res.status(400).json({ error: 'Nenhum Talhão informado.' })
    }

    // Retorna a área de um Talhão
    async getAreaTalhao(req, res) {
        let tlh_id = req.query.tlh_id

        if(typeof tlh_id !== 'undefined' && tlh_id != 0){
            return await Area_Talhao.findOne({
                where: { tlh_id },
                attributes: [
                    'latitude', 'longitude'
                ]
            }).then(async (r) => {
                const {
                    latitude, longitude
                } = r.get()
                res.status(200).json({ latitude, longitude })

            }).catch((err) =>
                res.status(400).json({ error: err.message })
            )
        }
        return res.status(400).json({ error: 'Talhão não informado.' })
    }

    // Deleta um Talhão
    async delTalhao(req, res) {
        let { tlh_id } = req.body

        return await Talhao.findOne({
            where: { tlh_id }
        }).then(async (talhao) => {
            if(talhao !== null) {
                let { tlh_apelido } = talhao.get()
                return await talhao.destroy().then(() => 
                    res.status(200).json({ message: `Talhão ${tlh_apelido} deletado.` })
                )
            }
            return res.status(400).json({ error: 'Talhão não encontrado.' })
        
        }).catch((err) => {
            return res.status(400).json({ error: err.message })
        })
    }

    // Adiciona/atualiza a Saúde dos Talhões
    async addTalhaoSaude(req, res) {
        let { tsd_id, tsd_nome, tsd_descr } = req.body

        if(typeof tsd_id === 'undefined' || tsd_id == 0) {
            return await Talhao_Saude.create({ 
                tsd_nome, tsd_descr 
            }).then(async () => 
                res.status(200).json({ message: `Saúde de Talhão ${tsd_nome} adicionada.` })
            ).catch((err) => 
                res.status(400).json({ error: err.message })
            )
        }
        else {
            return await Talhao_Saude.findOne({
                where: { tsd_id }
            }).then(async (saude) => {
                if(saude){
                    await saude.update({ tsd_id, tsd_nome, tsd_descr })
                    return res.status(200).json({ message: `Saúde de Talhão ${tsd_nome} atualizada.` })
                }
                return res.status(400).json({ error: 'Saúde de Talhão não encontrada.' })    
            
            }).catch((err) => 
                res.status(400).json({ error: err.message })
            )
        }
    }

    // Retorna a Saúde de um Talhão ou todas as Saúdes dos Talhões
    async getTalhaoSaude(req, res) {
        let tsd_id = req.query.tsd_id
        let tlh_id = req.query.tlh_id

        if(typeof tlh_id !== 'undefined' && tlh_id != 0){
            return await Talhao.findOne({
                where:{ tlh_id },
                attributes: ['tlh_saude']
            }).then(async (r) =>{
                if(r) {
                    const { tlh_saude } = r.get()
                    return await Talhao_Saude.findOne({
                        where: { tsd_id:tlh_saude },
                        attributes: [
                            'tsd_id', 'tsd_nome', 'tsd_descr'
                        ],
                        raw: true,
                        nest: true,
                    }).then((saude) => {
                        //const { tsd_id, tsd_nome, tsd_descr } = saude.get()
                        return res.status(200).json({ saude })
                    
                    }).catch((err) =>
                        res.status(400).json({ error: err.message })
                    )
                }
                return res.status(400).json({ error: 'Falha ao obter a Saúde do Talhão' })
            }).catch((err) =>
                res.status(400).json({ error: err.message })
            )
        }
        else if(typeof tsd_id !== 'undefined' && tsd_id != 0) {
            return await Talhao_Saude.findOne({
                where: { tsd_id },
                attributes: [
                    'tsd_id', 'tsd_nome', 'tsd_descr'
                ]
            }).then(async (r) => {
                const { tsd_id, tsd_nome, tsd_descr } = r.get()
                return res.status(200).json({ tsd_id, tsd_nome, tsd_descr })
            }).catch((err) =>
                res.status(400).json({ error: err.message })
            )
        }
        
        return await Talhao_Saude.findAll({
            attributes: [
                'tsd_id', 'tsd_nome', 'tsd_descr'
            ],
            order: [['tsd_nome', 'DESC']]
        }).then(async (saudes) => 
            res.status(200).json({ saudes })
        ).catch((err) =>
            res.status(400).json({ error: err.message })
        )
    }

    // Deleta um item da Saúde dos Talhões
    async delTalhaoSaude(req, res) {
        let { tsd_id } = req.body

        return await Talhao_Saude.findOne({
            where: { tsd_id }
        }).then(async (saude) => {
            if(saude !== null) {
                let { tsd_nome } = saude.get()
                return await saude.destroy().then(() => 
                    res.status(200).json({ message: `Saúde de Talhão ${tsd_nome} deletada.` })
                )
            }
            return res.status(400).json({ error: 'Saúde de Talhão não encontrada.' })
        
        }).catch((err) => {
            return res.status(400).json({ error: err.message })
        })
    }
}
module.exports = TalhaoController