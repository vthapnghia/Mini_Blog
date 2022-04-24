const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
// const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema;

const Post = new Schema({
    title: {type: String, require: true},
    content: {type: String},
    slug: { type: String, slug: 'title', unique: true}
  }, {
    timestamps: true
  });

mongoose.plugin(slug);
// Post.plugin(mongooseDelete, {
//   deleteAt: true,
//   overrideMethods: 'all'
// })

module.exports =  mongoose.model('Post',  Post)