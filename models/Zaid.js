//it is mongoose not mangoose
const mongoose = require('mongoose')


// Schema
const zaidSchema = new mongoose.Schema({
    name:{
        type: String
    },
    zaidImage:{
        type: String
    },
    isPublic:{
        type: Boolean
    }
})


// model
const Zaid = mongoose.model('Zaid',zaidSchema)

//missing S in export 
module.exports = Zaid