const { models } = require('../models')

class Produtor {

    // adiciona/atualiza um Produtor
    async addProdutor(req, _) {
        let { prd_id, prd_nome, prd_email, prd_senha } = req
        if(prd_id == 0){
            return await models.Produtor.create({
                prd_nome, prd_email, prd_senha
            })
        }
        else {
            prd_id = (prd_id).toString()
            return await models.Produtor.findOne({
                where: { prd_id }
            }).then(async (produtor) => 
                await produtor.update({
                    prd_nome, prd_email, prd_senha
                })
            )
        }
    }

    // Retornar um ou mais Produtores
    async getProdutor(req, _) {
        let { prd_id } = req
        prd_id = (prd_id).toString()

        if(prd_id == ('0' || '')) {
            return await models.Produtor.findAll({
                attributes: [
                    'prd_id', 'prd_nome', 'prd_email', 'prd_senha'
                ],
                order: [['prd_nome', 'DESC']]
            })
        }
        else {
            return await models.Produtor.findOne({
                where: { prd_id },
                attributes: [
                    'prd_id', 'prd_nome', 'prd_email', 'prd_senha'
                ]
            })
        }
    }

    // Remove um Produtor
    async delProdutor(req, _) {
        let { prd_id } = req
        prd_id = (prd_id)

        return await models.Produtor.findOne({
            where: { prd_id }
        }).then(async (produtor) => 
            await produtor.destroy()
        )
    }

}
module.exports = { Produtor }