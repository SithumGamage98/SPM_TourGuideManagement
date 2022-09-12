const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_name:{
        type : String,
        required: true    
    },
    full_name:{
        type : String,
        required: true    
    },
    email:{
        type : String,
        required: true    
    },
    password:{
        type : String,
        required: true    
    }
});

const user = mongoose.model("users", userSchema);

module.exports = user;