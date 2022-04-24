const express = require('express')
const router = express.Router()
const SiteController = require('../app/controllers/SiteController')

router.use('/', SiteController.home)

module.exports = router