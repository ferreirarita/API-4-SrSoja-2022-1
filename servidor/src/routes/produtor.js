const router = require('express').Router()
const { ProdutorController } = require('../controllers')
const { addProdutor, getProdutor, delProdutor } = new ProdutorController()

router.post('/insert', addProdutor)
router.put('/update', addProdutor)
router.get('/get', getProdutor)
router.delete('/delete', delProdutor)

router.use((_, res) => {
    res.status(400).json({error: 'Operação desconhecida com o Produtor'})
})

module.exports = router