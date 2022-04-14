const router = require('express').Router()
const { TalhaoController } = require('../controllers')
const {
    addTalhao,
    getTalhao,
    getAreaTalhao,
    delTalhao
} = new TalhaoController()

router.post('/insert', addTalhao)
router.put('/update', addTalhao)
router.get('/get', getTalhao)
router.get('/get/area', getAreaTalhao)
router.delete('/delete', delTalhao)

router.use((_, res) => {
    res.status(400).json({error: 'Operação desconhecida com o Talhão'})
})

module.exports = router