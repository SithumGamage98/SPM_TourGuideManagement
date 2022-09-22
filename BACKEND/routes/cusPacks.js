const express=require('express');
let CusPack = require("../models/CusPack");

const router=express.Router();



//Add 1

router.route("/add").post((req,res)=>{

    const name = req.body.name; 
    const email = req.body.email; 
    const phone = Number(req.body.phone);
    const arriDate= req.body.arriDate; 
    const pickPlace= req.body.pickPlace; 
    const destination= Number(req.body.destination); 
    const NofDays= Number(req.body.NofDays); 
    const NoPass= Number(req.body.NoPass); 
    const notes= req.body.notes; 
  
   
   
   
   
    const newCusPack = new CusPack({
   
       name,
       email,
       phone,
       arriDate,
       pickPlace,
       destination,
       NofDays, 
       NoPass,
       notes
      
   
     
   
   
   
    })
   
    newCusPack.save().then(()=>{
   
        res.json("Your package is successfully created!");
   
   
     }).catch((err)=>{
   
        console.log(err);
   
     })
   
   }) 




//View Data 2

router.get('/all4',(_req,res)=>{

   CusPack.find().exec((err,cusPacks)=>{
       if(err){
     return res.status(400).json({
      error:err



     });


    }

     return res.status(200).json({

         success:true,
         existingCusPacks:cusPacks


     });


   });



});

//Update 22

router.route("/update/:id").patch(async(req,res)=>{

   const cp = await CusPack.findById(req.params.id);

 if (cp) {
   cp.name = req.body.name || cp.name;
   cp.email = req.body.emai || cp.email;
   cp.phone = req.body.phone || cp.phone;
   cp.arriDate = req.body.arriDate ||cp.arriDate;
   cp.pickPlace = req.body.pickPlace ||  cp.pickPlace;
   cp.destination = req.body.destination || cp.destination;
   cp.NofDays = req.body.NofDays || cp.NofDays;
   cp.NoPass = req.body.NoPass || cp.NoPass;
   cp.notes = req.body.notes || cp.notes;
  
   const updatefeedback = await cp.save();

   res.json({
      name: updatefeedback.name,
      email: updatefeedback.email,
      phone: updatefeedback. phone,
      arriDate: updatefeedback.arriDate,
      pickPlace: updatefeedback.pickPlace,
      destination: updatefeedback.destination,
      NofDays: updatefeedback.NofDays,
      NoPass: updatefeedback.NoPass,
      notes: updatefeedback.notes,
       
   });
 } else {
   res.status(404);
   
   throw new Error("Can't Update Package Details");
 }


})


//delete

router.route("/delete/:id").delete(async(req,res)=>{

   let packId =req.params.id;
   
   await CusPack.findByIdAndDelete(packId).then(()=> {
   
    res.status(200).send({status: "Package Cancelled..!!"});
    
    }).catch((err)=>{
   
   console.log(err.message);
   res.status(500).send({status: "Error with delete package", error:err.message});
   
    })
   
   
   
   })
   
//Retrive by ID 222
router.route("/get/:id").get(async(req,res)=>{
   const cd = await CusPack.findById(req.params.id);

 if (cd) {
   res.json(cd);
 } else {
   res.status(404).json({ message: "Package not found" });
 }
})



   module.exports = router;