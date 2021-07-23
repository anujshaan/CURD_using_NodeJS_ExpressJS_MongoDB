const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
    },
    status:{
        type:String
    }

},{timestamps:true}
)

const UserDB = mongoose.model('userdb',userSchema);
module.exports = UserDB;