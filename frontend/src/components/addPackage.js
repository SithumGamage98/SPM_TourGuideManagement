import React,{useState} from "react";
//import React,{Component} from "react"
import axios from "axios";
import "../style_sheets/Style.css";
import galle from '../img/Travelo.jpeg'
import create from '../img/Create package.jpg'

//import axios from "axios";
//import {setErrors} from "./../components/setErrors";
 




function AddPackage(){

  const [name,setName] = useState("");
  const [packId,setPid] = useState("");
  const [destination,setDesti] = useState("");
  const [numofdays,setDays] = useState("");
  const [nopass,setPass] = useState("");
  const [hotel,setHotel] = useState("");
  const [transport,setTrans] = useState("");
  const [tourGuide,setGuide] = useState("");
  const [totPrice,setPrice] = useState("");
  const [photo,setPhoto] = useState("");


  // (local function) sendData(e: any):void
  function sendData(e){
   e.preventDefault();
   
   
   const newPackage={

     name,
     packId,
     destination,
     numofdays,
     nopass,
     hotel,
     transport,
     tourGuide,
     totPrice,
     


   }

   


   axios.post("http://localhost:8070/package/add",newPackage).then(()=>{

     alert("Package Added")
   }).catch((err)=>{

     alert(err)

   })

  }

 return(
   

   <div className="container" class="p-3 mb-2 bg-white" > 
    
    <form onSubmit={sendData}>

    <img class="logo" src={galle} style={{ position:"absolute", right:1300,top:26}} height={50} width={200}  alt="Card image cap"></img>
    <a class="btnHome" href="/man"  style={{ position:"absolute", right:50,top:600}}>Home</a>
    <div class="header2"> <h1 class="header"><strong><center>Enter New Tour Package Details</center></strong></h1><br></br></div>
   
  <br></br><br></br>
 
  <div>
    <div className="form-group"  style={{width:"500px"}}>
      
      <label for="Name"><strong>Package Name *</strong></label>
      <input type="text" class="form-control" id="pacName" placeholder="Enter package name here"
      onChange={(e)=> {

        setName(e.target.value);

       } }/>
  
    </div><br></br>
    
    <div className="form-group" style={{width:"500px"}}>
      <label for="id"><strong>Package ID</strong>*</label>
      <input type="text" class="form-control" id="packId" placeholder="Enter package_ID here"
       onChange={(e)=> {

        setPid(e.target.value);

       } }/>
      
      
  
    </div><br></br>
  
    <div class="form-row" className="form-group" style={{width:"500px"}}>
      <label for="desti"><strong>Destination *</strong></label>
      <input type="text" class="form-control" id="desti" placeholder="Enter any destination"
      onChange={(e)=> {

        setDesti(e.target.value);

       } }/>
      
  
    </div><br></br>
    
    <div className="form-group" style={{width:"500px"}}>
      <label for="numDays"><strong>Number of days *</strong></label>
      <input type="number" class="form-control" id="numDays" min="1" max="7" placeholder="Enter days between 1 and 7"
      onChange={(e)=> {

        setDays(e.target.value);

       } }/>

    </div><br></br>
   
    <div className="form-group" style={{width:"500px"}}>
      <label for="numPass"><strong>Number of passengers *</strong></label>
      <input type="number" class="form-control" id="numPass" min="1" max="15" placeholder="Enter passengers between 1 and 15"
      onChange={(e)=> {

        setPass(e.target.value);

       } }/>
   
    </div>


    
    </div><br></br>
   <div style={{position:"absolute",top:220,right:300}}>
    <div className="form-group" style={{width:"500px"}}>
      <label for="hotel"><strong>Hotel/Other</strong></label>
      <select type="text" class="form-control" id="hotel" required placeholder="Enter hotel name"
      onChange={(e)=> {

        setHotel(e.target.value);

       } }>

        <option selected>None</option>
        <option>Camping</option>
        <option>NCG Holiday (pvt)</option>
        <option>Jitwing (pvt)</option>
        <option>Paradice resolt Rsd(pvt)</option>
       </select>

    
    </div><br></br>


    <div className="form-group" style={{width:"500px"}}>
      <label for="transport"><strong>Transport</strong></label>
      <select type="text" class="form-control" id="transport" requred placeholder="Enter Transport Company"
      onChange={(e)=> {

        setTrans(e.target.value);

       } }>
     <option selected>None</option>
        <option>Dilanka Cabs/Transports</option>
        <option>NCG Transport(pvt)</option>
        <option>Selinaiyo Lanka Vehicle Center</option>
        <option>SK and sons(pvt)</option>
       </select>
    
    </div><br></br>
    <div className="form-group" style={{width:"500px"}}>
      <label for="guide"><strong>Tour guide</strong></label>
      <select type="text" class="form-control" id="guide" required placeholder="with/without"

      onChange={(e)=> {

        setGuide(e.target.value);

       } }>
       
       <option selected>None</option>
       <option>With</option>
        <option>Without</option>

      </select>

       

    </div><br></br>

    <div className="form-group" style={{width:"500px"}}>
      <label for="price"><strong>Total price(Rs) *</strong></label>
      <input type="text" class="form-control"  id="price" placeholder="Enter total price"
      onChange={(e)=> {

        setPrice(e.target.value);

       } }/>
     </div>
    </div>
    <button type="submit" class="btnUpdate2" style={{width:"150px"}}><strong>&nbsp;Create</strong></button>&nbsp;
   
   </form><br></br>

  
  <div class="card-body">
  <h5 class="text-dark"><center><strong>Travelo</strong></center></h5>
  <p class="text-white"><center>copyright @2020 Travelo All rights are reserved</center></p>
  </div>
  <div class="card-footer text-muted">
    
  </div>
</div>
   

 )




} 

export default AddPackage