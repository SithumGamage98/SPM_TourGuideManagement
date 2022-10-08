import React,{useState} from "react";
//import React,{Component} from "react"
import axios from "axios";
import pic2 from '../images/Tboy.jpg'



 
function CusPackage(){

  const [name,setName] = useState("");
  const [email,setMail] = useState("");
  const [phone,setPhone] = useState("");
  const [arriDate,setDate] = useState("");
  const [pickPlace,setPickPlace] = useState("");
  const [destination,setDesti] = useState("");
  const [NofDays,setDays] = useState("");
  const [NoPass,setPasseng] = useState("");
  const [notes,setNotes] = useState("");



  // (local function) sendData(e: any):void
  function sendData(e){
   e.preventDefault();
   
   const newPackage={

    name,
    email,
    phone,
    arriDate,
    pickPlace,
    destination,
    NofDays, 
    NoPass,
    notes

   }
   axios.post("http://localhost:8070/cusPack/add",newPackage).then(()=>{

     alert("Your Package Created!")
   }).catch((err)=>{

     alert(err)

   })

  }

 return(
   
  
   <div className="container" class="p-3 mb-2 bg-white">
   
    
    <div class="row">
    <form onSubmit={sendData} c>
    <div class="header2"></div>
    <div class="header"> <h1 class="header" style={{position:"absolute",top:40 ,right:450}}><strong><center>Create my tour packages</center></strong></h1><br></br></div><br></br>
     <a class="btnHome" href="#"  style={{ position:"absolute", right:30,top:26}}>Home</a> &nbsp;&nbsp;
     <a class="btnHome" href="#"  style={{ position:"absolute", right:140,top:26}}>My packages</a>
     <img  src={pic2} height={600} width={600} style={{position:"absolute",top:200,right:20}} alt="Card image cap" />
    <div class="form-group col-md-6">
      <label for="uname"><strong>User name</strong></label>
      <input type="text" class="form-control" id="uname" placeholder="Enter your name here"
      onChange={(e)=> {

        setName(e.target.value);

       } }/>
  
    </div><br></br>
    
    <div  class="form-group col-md-6">
      <label for="emial"><strong>Email</strong></label>
      <input type="email" class="form-control" id="email" placeholder="Eg- jhone99@gmail.com"
       onChange={(e)=> {

        setMail(e.target.value);

       } }/>
      
      
  
    </div><br></br>
  
    <div class="form-group col-md-6">
      <label for="Mobi"><strong>Mobile Number</strong></label>
      <input type="mobile" class="form-control" id="Mobi" placeholder="Enter your mobile number"
      onChange={(e)=> {

        setPhone(e.target.value);

       } }/>
      
  
    </div><br></br>

    <div class="form-group col-md-6">
      <label for="Country"><strong>Date</strong></label>
      <input type="date" class="form-control" id="Date" placeholder="Enter arriaval date"
      onChange={(e)=> {

        setDate(e.target.value);

       } }/>

    
    </div><br></br>

    <div class="form-group col-md-6">
      <label for="date"><strong>Pick up place</strong></label>
      <input type="text" class="form-control" id="date" placeholder="Enter pick up place here"
      onChange={(e)=> {

        setPickPlace(e.target.value);

       } }/>

    
    </div><br></br>

    <div class="form-group col-md-6">
      <label for="hotel"><strong>Your destination</strong></label>
      <input type="text" class="form-control" id="place" placeholder="Enter destination here"
      onChange={(e)=> {

        setDesti(e.target.value);

       } }/>

    
    </div><br></br>


    <div class="form-group col-md-6">
      <label for="adults"><strong>Number of days</strong></label>
      <input type="number" class="form-control" id="days" min="1" max="7" placeholder="Number of days"
      onChange={(e)=> {

        setDays(e.target.value);

       } }/>

    
    </div><br></br>

    <div class="form-group col-md-6">
      <label for="child"><strong>Number of passengers</strong></label>
      <input type="number" class="form-control" id="passengers" min="1" max="15" placeholder="Number of passengers"
      onChange={(e)=> {

        setPasseng(e.target.value);

       } }/>

    
    </div><br></br>

 

<div class="form-group col-md-6">
  <label for="note"><strong>Notes - </strong></label>
  <textarea  type="text-area" height="60px" class="form-control" id="note" placeholder="Enter any notes here"
  onChange={(e)=> {

    setNotes(e.target.value);

   } }/>


    
    </div><br></br>
   
    <button class="btnSubmit" type="submit" style={{width:"250px"}}><strong><i className="fa-solid fa-folder-plus"></i>&nbsp;&nbsp;Create</strong></button>&nbsp;&nbsp;
    
    
   </form>
   </div>


<br></br>
  <div class="card-body">
  <h5 class="text-dark"><center><strong>Travelo</strong></center></h5>
  <p class="text-white"><center>copyright @2020 Travelo All rights are reserved</center></p>
  </div>
  <div class="card-footer text-muted">
    
  </div>







   </div>

  


 )




} 

export default CusPackage