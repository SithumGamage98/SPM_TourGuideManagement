const mongoose = require('mongoose');
const router = require('../routes/cusPacks');

//const Schema=mongoose.Schema;

const cusPackageScheama = new mongoose.Schema({

 

name :{
    type : String,
    required : true
     
},

email :{
    type : String,
    required : true
     
},



phone:{

 
 type:String,
 required:true


},

arriDate:{

 
    type:String,
    required:true
   
   
},

pickPlace:{

    type:String,
    required:true
    
   },


destination:{

 type:String,
 required:true
 
},

NofDays:{

    type:Number,
    required : true
   
   
},

NoPass:{

    type:Number,
    required : true
   
   
},


notes:{

    type:String,
    required : true
   
   
},







})


const CusPack=mongoose.model("customizePackages",cusPackageScheama);

module.exports=CusPack;

