const express = require('express')
const router = express.Router()
const AboutController = require('../app/controllers/AboutController')

router.use('/', AboutController.about)

module.exports = router