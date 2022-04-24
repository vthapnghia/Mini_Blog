const Post = require('../models/Post')

class SiteController{
    home(req, res, next){
        Post.find().lean()
            .then(posts => res.render('home', {posts}))
            .catch(next)
    }
}

module.exports = new SiteController