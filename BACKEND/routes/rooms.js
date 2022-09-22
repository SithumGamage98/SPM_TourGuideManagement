const router = require("express").Router();
const { aggregate } = require("../models/Room");
let Room = require("../models/Room");

router.route("/insert").post((req, res)=>{
    
    const check_in_date= req.body.check_in_date;
    const check_out_date= req.body.check_out_date;
    const type = req.body.type;
    const no_of_guest = req.body.no_of_guest;
    const no_of_rooms = Number(req.body.no_of_rooms);

    const newRoom = new Room({
        check_in_date,
        check_out_date,
        no_of_guest ,
        no_of_rooms

    })

    newRoom.save().then(()=>{
        res.json("room Added")
    }).catch((err)=>{
        console.log(err);

    })
})

module.exports = router;