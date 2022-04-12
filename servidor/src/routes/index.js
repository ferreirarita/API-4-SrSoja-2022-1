const router = require('express').Router()

//
const produtorRoute = require('./produtor')

//
router.use('/produtor', produtorRoute)

module.exports = router