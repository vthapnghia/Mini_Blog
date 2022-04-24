const express = require('express')
const router = express.Router()
const ContactController = require('../app/controllers/ContactController')

router.use('/', ContactController.contact)

module.exports = router