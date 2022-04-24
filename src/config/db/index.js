const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/mini_blog', {
            useNewUrlParser: true,  
            useUnifiedTopology: true,
        })
        console.log('success')
    } catch (error) {
        console.log('fail')
    }
    
}

module.exports = { connect };