const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const handlebars = require('express-handlebars')
const route = require('./routes')
const db = require('./config/db')

//conect to DB
db.connect();


app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

//Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

//Routes init
route(app)

app.listen(port)