const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.SERVER_PORT || 8081
const mongoose = require('mongoose')
const index = require('./routes/index')
//CONFIG
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + 'public'))
//ROUTES
app.use('/', index)
//MONGODB
mongoose.connect(`${process.env.MONGOURI}`, () => console.log('Conectado ao banco de dados com sucesso!'))
//SERVER
app.listen(port, () => console.log(`PROJETO ${process.env.PROJECTNAME} rodando na porta ${port}`))