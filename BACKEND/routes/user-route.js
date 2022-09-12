const express = require('express');
let user = require("../models/user");

const router = express.Router();

//store new users data in the database
router.route("/new").post((req,res) => {
    const user_name = req.body.user_name;
    const full_name = req.body.full_name;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new user({
        user_name,
        full_name,
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
    const user_name = req.body.user_name;
    const full_name = req.body.full_name;
    const email = req.body.email;
    const password = req.body.password;

    const update = {
        user_name,
        full_name,
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
router.route("/:id").get((req,res) => {
    user.findOne({_id: req.params.id})
        .then(user => res.json({user}))
        .catch(err => res.status(400).json('Error : '+err));
});

//Returns true if a user is available under given username or else returns false
router.route("/available/:username").get((req,res) => {
    user.find({user_name: req.params.username})
        .then((user) => {
            if(user.length){
                res.json("There is a user under that name");
            }else {
                res.json("No luck bud");
            }
        })
        .catch(err => res.status(400).json('Error : '+err));
})

module.exports = router;