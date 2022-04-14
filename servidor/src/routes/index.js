const router = require('express').Router()

//
const produtorRoute = require('./produtor')
const fazendaRoute = require('./fazenda')
const talhaoRoute = require('./talhao')
const talhaoSaudeRoute = require('./talhao_saude')

//
router.use('/produtor', produtorRoute)
router.use('/fazenda', fazendaRoute)
router.use('/talhao', talhaoRoute)
router.use('/saude', talhaoSaudeRoute)

module.exports = router