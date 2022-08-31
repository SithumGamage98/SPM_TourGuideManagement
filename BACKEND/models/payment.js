const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    user_id:{
        type : String,
        required: true    
    },
    full_name:{
        type: String,
        required: true
    },
    card_num:{
        type: String,
        required: true
    },
    cvv:{
        type: String,
        required: true
    },
    expiry_date:{
        type: String,
        required: true
    },
    street_address:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    zip_code:{
        type: String,
        required: true
    }

})

const Payment=mongoose.model("payment_details",paymentSchema);

module.exports = Payment;