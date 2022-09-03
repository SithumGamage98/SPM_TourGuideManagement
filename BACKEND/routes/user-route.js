const express = require('express');
let user = require("../models/user");

const router = express.Router();

//store new users data in the database
router.route("/new").post((req,res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new user({
        first_name,
        last_name,
        email,
        password
    });

    newUser.save().then(() => {
        res.json("User registered successfully!");
    }).catch((err) => {
        console.log(err);
    })
});

router.put("/update/:id", (req,res) => {
    const _id = req.params.id;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;

    const update = {
        first_name,
        last_name,
        email,
        password
    }

    user.updateOne({_id: _id}, update, (err, docs) => {
        if(err) {
            console.log(err);
        }else {
            res.json("User details updated successfully!");
            console.log("Updated Docs : ", docs);
        }
    });
});

//Delete a user from database
router.delete("/delete/:id", (req,res) => {
    user.deleteOne({_id: req.params.id})
        .then(() => {res.json("User deleted successfully!")})
        .catch(err => res.status(400).json('Error :'+err));
});

//Get a single record from the database
//TODO try "/:id" as the route when testing
router.route("/get/:id").get((req,res) => {
    user.findOne({_id: req.params.id})
        .then(payment => res.json({payment}))
        .catch(err => res.status(400).json('Error : '+err));
});

module.exports = router;