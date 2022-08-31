const router = require("express").Router();
let Package = require("../models/Package");

//Add a new vehicle to the system
router.route("/add").post((req,res)=>{

    const packName = req.body.packName; 
    const packID = req.body.packID; 
    const Destination = req.body.Destination;
    const NumOfDays = req.body.NumOfDays;
    const NumOfPassen = req.body.NumOfPassen;
    const Hotel = req.body.Hotel;
    const Transport = req.body.Transport;
    const TourGuide = req.body.TourGuide;
    const TotPrice = req.body.TotPrice;

 

    const newPack = new Package({
      packName,
      packID,
      Destination,
      NumOfDays,
      NumOfPassen,
      Hotel,
      Transport,
      TourGuide,
      TotPrice

    })
   
    newPack.save().then(()=>{
   
        res.json("Tour Package Creatd Successfully");
   
   
     }).catch((err)=>{
   
        console.log(err);
   
     })
   
   }) 



  
//Get all vehicle data 
router.get('/all',(_req,res)=>{

  Package.find().exec((err,packages)=>{
      if(err){
    return res.status(400).json({
     error:err

    });


   }

    return res.status(200).json({

        success:true,
        existingPackages:packages


    });


  });

});



//Retrive by ID 222
router.route("/get/:id").get(async(req,res)=>{
    const pk = await Package.findById(req.params.id);
  
  if (pk) {
    res.json(pk);
  } else {
    res.status(404).json({ message: "Package not found" });
  }
  })


  //Update Package Details

router.route("/update/:id").patch(async(req,res)=>{

  const pk = await Package.findById(req.params.id);

if (pk) {
  pk.packName = req.body.packName || fb.packName;
  pk.packID = req.body.packID || fb.packID;
  pk.Destination = req.body.Destination || fb.Destination;
  pk.NumOfDays = req.body.NumOfDays || fb.NumOfDays;
  pk.NumOfPassen = req.body.NumOfPassen || fb.NumOfPassen;
  pk.Hotel = req.body.Hotel || fb.Hotel;
  pk.Transport = req.body.Transport || fb.Transport;
  pk.TourGuide = req.body.TourGuide || fb.TourGuide;
  pk.TotPrice = req.body.TotPrice || fb.TotPrice;
 
  const updatePackage = await pk.save();

  res.json({
    packName: updatePackage.packName,
    packID: updatePackage.packID,
    Destination: updatePackage.Destination,
    NumOfDays: updatePackage.NumOfDays,
    NumOfPassen: updatePackage.NumOfPassen,
    Hotel: updatePackage.Hotel,
    Transport: updatePackage.Transport,
    TourGuide: updatePackage.TourGuide,
    TotPrice: updatePackage.TotPrice,
   
      
  });
} else {
  res.status(404);
  
  throw new Error("Can't Update Package Details");
}

})

//Delete any created tour package



router.route("/delete/:id").delete(async(req,res)=>{

  let Pid =req.params.id;
  
  await Package.findByIdAndDelete(Pid).then(()=> {
  
   res.status(200).send({status: "Package Deleted"});
   
   }).catch((err)=>{
  
  console.log(err.message);
  res.status(500).send({status: "Error with delete the package", error:err.message});
  
   })
  
  
  
  })


  module.exports = router;


  