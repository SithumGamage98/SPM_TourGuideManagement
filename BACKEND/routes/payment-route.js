const express = require('express');
let payment = require("../models/payment");

const router = express.Router();

//Save data into the database
router.route("/add").post((req,res) => {
    const user_id = req.body.user_id;
    const full_name = req.body.full_name; 
    const card_num = req.body.card_num;
    const cvv = req.body.cvv;
    const expiry_date = req.body.expiry_date; 
    const street_address = req.body.street_address; 
    const country  = req.body.country; 
    const city = req.body.city; 
    const state  = req.body.state; 
    const zip_code  = req.body.zip_code;

    const newPayment = new payment({
        user_id,
        full_name,
        card_num,
        cvv,
        expiry_date,
        street_address,
        country,
        city,
        state,
        zip_code
    });

    newPayment.save().then(()=>{
        res.json("Payment details added succsessfully!");
    }).catch((err)=>{
        console.log(err);
    })
});

//Update data from the database
router.put("/update/:id", (req,res) => {
    const user_id = req.params.id;
    const full_name = req.body.full_name; 
    const card_num = req.body.card_num;
    const cvv = req.body.cvv;
    const expiry_date = req.body.expiry_date; 
    const street_address = req.body.street_address; 
    const country  = req.body.country; 
    const city = req.body.city; 
    const state  = req.body.state; 
    const zip_code  = req.body.zip_code;

    const update = {
        full_name,
        card_num,
        cvv,
        expiry_date,
        street_address,
        country,
        city,
        state,
        zip_code
    }

    payment.updateOne({user_id: user_id}, update, (err, docs) => {
        if (err){
            console.log(err);
        }
        else{
            res.json("Payment details updated successfully!");
            console.log("Updated Docs : ", docs);
        }
    });
});

//Delete an entry from the database
router.delete("/delete/:id", (req,res) => {
    payment.deleteOne({user_id: req.params.id})
        .then(() => {
            res.json('Payment details deleted successfully!')
        })
        .catch(err => res.status(400).json('Error : '+err));
});

//Get a single record from the database
router.route("/get/:id").get((req,res) => {
    payment.findOne({user_id: req.params.id})
        .then(payment => res.json({payment}))
        .catch(err => res.status(400).json('Error : '+err));
});

module.exports = router;