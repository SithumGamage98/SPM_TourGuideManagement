const router = require("express").Router();
const { aggregate } = require("../models/Hotel");
let Hotel = require("../models/Hotel");

router.route("/add").post((req, res)=>{
    
    const name= req.body.name;
    const type = req.body.type;
    const location = req.body.location;
    const price = req.body.price;
    const no_of_rooms = Number(req.body.no_of_rooms);

    const newHotel = new Hotel({
        name,
        type,
        location ,
        price,
        no_of_rooms

    })

    newHotel.save().then(()=>{
        res.json("hotel Added")
    }).catch((err)=>{
        console.log(err);

    })
})


router.get('/all',(req,res)=>{

    Hotel.find().exec((err,hotels)=>{
        if(err){
      return res.status(400).json({
       error:err



      });


     }

      return res.status(200).json({

          success:true,
          existingHotels:hotels


      });


    });



});





//Update
router.route("/update/:id").put(async(req, res)=>{
    let hotelId = req.params.id;
    const {name,type,  location, price, no_of_rooms} = req.body;

    const updateHotel = {
        name,
        type,
        location ,
        price,
        no_of_rooms
        }

        const update = await Hotel.findByIdAndUpdate(hotelId, updateHotel)
        .then(()=>{
            res.status(200).send({status:"hotel updated"})

        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status: "Error with updating data", error:err.message});
        })
    })

    router.route("/delete/:id").delete(async(req , res)=>{
        let hotelId = req.params.id;

     await Hotel.findByIdAndDelete(hotelId)
        .then(()=>{
            res.status(200).send({status: "hotel deleted"})

        }).catch(()=>{
            console.log(err.message);
            res.status(500).send({status: "Error with delete hotel", error: err.message });
        })
    })

    router.route("/get/:id").get(async(req, res)=>{
        let hotelId = req.params.id;
        const hotel = await Hotel.findById(hotelId)
        .then(()=>{
            res.status(200).send({status: "hotel fetched", hotel: hotel})
        }).catch(()=>{
            console.log(err.message)
            res.status(500).send({status: "Error with get user", error: err.message});
        })
    })
module.exports = router;