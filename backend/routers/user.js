const express = require('express')
const { getUser,signup,lognin } = require('../controllers/user.js')

const UserRoute = express.Router()

UserRoute.get('/:id', getUser)
UserRoute.post('/signup', signup)
UserRoute.post('/login', lognin)


module.exports =  UserRoute