const mongoose = require('mongoose');
const router = require('../routes/tourguides');

//const Schema=mongoose.Schema;

const tourguideSchema = new mongoose.Schema({

 

fullName :{
    type : String,
    required : true
     
},


age :{
    type : String,
    required : true
     
},


address:{

 
 type:String,
 required:true


},

dateOfBirth:{

 type:String,
 required : true


},

contactNumber:{

    type:Number,
    required : true
   
   
},

gender :{
    type : String,
    required : true
     
},

nicNumber :{
    type : String,
    required : true
     
},

eMail :{
    type : String,
    required : true
     
},

workExperience :{
    type : String,
    required : true
     
},
amount :{
    type : String,
    required : true

},


})


const Tourguide=mongoose.model("Tourguide",tourguideSchema);

module.exports=Tourguide;




