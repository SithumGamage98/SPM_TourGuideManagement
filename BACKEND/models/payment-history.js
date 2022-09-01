const mongoose = require('mongoose');

const paymentHistorySchema = new mongoose.Schema({
    user_id:{
        type : String,
        required: true    
    },
    service_name:{
        type: String,
        required: true
    },
    amount_paid:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true,
        default: Date.now
    }
});

const PaymentHistory=mongoose.model("Payment_history",paymentHistorySchema);

module.exports = PaymentHistory;