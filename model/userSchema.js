const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    title:String,
    desc:String,
    Date:{
        type:Date,
        default:Date.now()
    }
})

const User = mongoose.model("user",userSchema)

module.exports = User