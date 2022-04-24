const aboutRouter = require('./about')
const siteRouter = require('./site')
const postRouter = require('./post')
const contactRouter = require('./contact')

function route(app){
    app.use('/about', aboutRouter)
    app.use('/home', siteRouter)
    app.use('/post', postRouter)
    app.use('/contact', contactRouter)
}

module.exports = route