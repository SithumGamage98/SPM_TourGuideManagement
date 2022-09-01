const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const roomSchema = new Schema({
    check_in_date:{
        type : String,
        required: true
        
    },

    check_out_date:{
        type : String,
        required: true
        
    },

    type:{
        type: String,
        required: true
    },
    

    // photos:{
    //     type: [String],
        
    // },

    no_of_guest:{
        type: String,
        required: true

    },
    no_of_rooms:{
        type: Number,
        required: true

    }

})
const Room = mongoose.model("Room",roomSchema);
module.exports = Room;