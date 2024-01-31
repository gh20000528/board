const express = require('express')
const { getComment, createComment, updateComment, deleteComment, getUserComment } = require('../controllers/comment.js')

const CommentRoute = express.Router()


CommentRoute.get('/:id', getUserComment)
CommentRoute.get('/', getComment)
CommentRoute.post('/', createComment)
CommentRoute.patch('/:id', updateComment)
CommentRoute.delete('/:id', deleteComment)

module.exports =  CommentRoute