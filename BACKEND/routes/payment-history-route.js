const express = require('express');
let paymentHistory = require("../models/payment-history");

const router = express.Router();

router.route("/add").post((req,res)=>{
    const user_id = req.body.user_id 
    const service_name = req.body.service_name; 
    const amount_paid = req.body.amount_paid;

    const previousPayments = new paymentHistory({
        user_id,
        service_name,
        amount_paid
    });

    previousPayments.save().then(()=>{
        res.json("Details of the payment stored in the database");
    }).catch((err)=>{
        console.log(err);
    })
});

router.route("/all/:id").get((req,res) => {
    paymentHistory.find({user_id: req.params.id})
      .then(paymentHistory => res.json({paymentHistory}))
      .catch(err => res.status(400).json('Error : '+err));
  });

module.exports = router;