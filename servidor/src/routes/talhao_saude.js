const router = require('express').Router()
const { TalhaoController } = require('../controllers')
const {
    addTalhaoSaude,
    getTalhaoSaude,
    delTalhaoSaude
} = new TalhaoController()

router.post('/insert', addTalhaoSaude)
router.put('/update', addTalhaoSaude)
router.get('/get', getTalhaoSaude)
router.delete('/delete', delTalhaoSaude)

router.use((_, res) => {
    res.status(400).json({error: 'Operação desconhecida com a Saúde do Talhão'})
})

module.exports = router