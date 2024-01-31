const express = require('express')
const { CreateCard, UpdateCard, AllCard, DeleteCard, getUserCard } = require('../controllers/card')

const CardRoute = express.Router()


CardRoute.get('/:id', getUserCard)
CardRoute.get('/', AllCard)
CardRoute.post('/', CreateCard)
CardRoute.patch('/:id', UpdateCard)
CardRoute.delete('/:id', DeleteCard)

module.exports =  CardRoute