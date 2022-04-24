const express = require('express')
const router = express.Router()

const postController = require('../app/controllers/PostController')

router.get('/new', postController.new)
router.post('/store', postController.store)
router.get('/:slug', postController.show)
module.exports = router