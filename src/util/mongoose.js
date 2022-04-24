module.exports = {
    mutipleMongooseToOject: function (mongooses){
        return mongooses.map(mongooses => mongooses.toOject)
    },
    mongooseToOject: function (mongoose){
        return mongoose ? mongoose.toOject() : mongoose
    }
}