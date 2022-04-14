const router = require('express').Router()
const { FazendaController } = require('../controllers')
const { addFazenda, getFazenda, delFazenda } = new FazendaController()

router.post('/insert', addFazenda)
router.put('/update', addFazenda)
router.get('/get', getFazenda)
router.delete('/delete', delFazenda)

router.use((_, res) => {
    res.status(400).json({error: 'Operação desconhecida com a Fazenda'})
})

module.exports = router