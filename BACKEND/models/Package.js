const mongoose = require('mongoose');
//const router = require('../routes/packages');



//Create Database Scheams
const PackageSchema = new mongoose.Schema({

 

packName :{
    type : String,
    required : true
     
},


packID : {

    type : String,
    required : true


},



Destination:{

    type:String,
    required : true
   
   
},

NumOfDays:{

 
 type:Number,
 required:true


},

NumOfPassen:{

 type:Number,
 required : true


},

Hotel:{

    type:String,
    required : false
   
   
   },


Transport:{

    type:String,
    required : false
   
   
   },


TourGuide:{

    type:String,
    required : false
   
   
   },


TotPrice:{

    type:String,
    required : true
   
   
   },


})

//Create a module for connect with scheama
const Package=mongoose.model("TourPackage",PackageSchema);

module.exports=Package;