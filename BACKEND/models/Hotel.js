const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const hotelSchema = new Schema({
    name:{
        type : String,
        required: true
        
    },
    type:{
        type: String,
        required: true
    },
    
    location:{
        type: String,
        required: true

    },

    // photos:{
    //     type: [String],
        
    // },

    price:{
        type: String,
        required: true

    },
    no_of_rooms:{
        type: Number,
        required: true

    }

})
const Hotel = mongoose.model("Hotel",hotelSchema);
module.exports = Hotel;