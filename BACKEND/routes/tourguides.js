const router = require("express").Router();
let Tourguide = require("../models/Tourguide");


router.route("/add").post((req,res)=>{

 const fullName = req.body.fullName; 
 const age = req.body.age;
 const address= req.body.address;
 const dateOfBirth= req.body.dateOfBirth; 
 const contactNumber = Number(req.body.contactNumber); 
 const gender  = req.body.gender; 
 const nicNumber = req.body.nicNumber; 
 const eMail  =(req.body.eMail); 
 const workExperience  = req.body.workExperience;
 const amount = req.body.amount;



 const newTourguide = new Tourguide({

  fullName,
  age,
  address,
  dateOfBirth,
  contactNumber,
  gender,
  nicNumber,
  eMail,
  workExperience,
  amount

  

 })

  newTourguide.save().then(()=>{

     res.json("Tour Guide Added Succsessfully!");


  }).catch((err)=>{

     console.log(err);

  })

}) 



router.get('/all',(req,res)=>{

  Tourguide.find().exec((err,tourguides)=>{
      if(err){
    return res.status(400).json({
     error:err



    });


   }

    return res.status(200).json({

        success:true,
        existingTourguides:tourguides


    });


  });



});




//Update tourguide

router.route("/update/:id").patch(async(req,res)=>{

  const fb = await Tourguide.findById(req.params.id);

if (fb) {
  fb.fullName = req.body.fullName || fb.fullName ;
  fb.age = req.body.age  || fb.age;
  fb.address = req.body.address || fb.address;
  fb.dateOfBirth = req.body.dateOfBirth || fb.dateOfBirth;
  fb.contactNumber = req.body.contactNumber || fb.contactNumber;
  fb.gender = req.body.gender || fb.gender;
  fb.nicNumber = req.body.nicNumber || fb.nicNumber;
  fb.eMail = req.body.eMail || fb. eMail;
  fb.workExperience = req.body.workExperience || fb.workExperience;
  fb.amount = req.body.amount  || fb.amount;

  
  const updateTourguide = await fb.save();

  res.json({
    fullName: updateTourguide.fullName,
    age: updateTourguide.age,
    address: updateTourguide.address,
    dateOfBirth: updateTourguide.dateOfBirth,
    contactNumber:updateTourguide.contactNumber,
    gender:updateTourguide.gender,
    nicNumber:updateTourguide.nicNumber,
    eMail:updateTourguide.eMail,
    workExperience:updateTourguide.workExperience,
    amount:updateTourguide.amount,
      
  });
} else {
  res.status(404);
  
  throw new Error("Can't Update Tourguide Details");
}


})




//delete tourguide

router.route("/delete/:id").delete(async(req,res)=>{

let TId =req.params.id;

await Tourguide.findByIdAndDelete(TId).then(()=> {

 res.status(200).send({status: "Tour Guide Deleted"});
 
 }).catch((err)=>{

console.log(err.message);
res.status(500).send({status: "Error with delete tourguide", error:err.message});

 })



})



//Retrive by ID 
router.route("/get/:id").get(async(req,res)=>{
  const fb = await Tourguide.findById(req.params.id);

if (fb) {
  res.json(fb);
} else {
  res.status(404).json({ message: "Tourguide not found" });
}
})



module.exports = router;