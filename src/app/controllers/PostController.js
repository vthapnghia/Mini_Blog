const Post = require('../models/Post')

class PostController{

    new(req, res){
        res.render('new-post')
    }

    store(req, res, next){
        const posts = new Post(req.body)
        posts.save()
            .then(() => res.redirect('/post/new'))
            .catch(error => {})
            
    }

    show(req, res, next){
        Post.findOne({slug: req.params.slug}).lean()
            .then(post => res.render('post', {post}))
            .catch(next)
        
    }
}

module.exports = new PostController