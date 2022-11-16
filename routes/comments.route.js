const { Router } = require('express')
const CommentController = require('../controller/comments.controller')
const router = Router()
router.post('/comments', CommentController.addNewComment)
router.get('/comments', CommentController.getAllComments)
module.exports = router
