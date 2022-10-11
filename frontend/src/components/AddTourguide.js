
import React,{useState} from "react";
//import React,{Component} from "react"
import axios from "axios";
//import axios from "axios";



function AddTourguide(){

  const [fullName,setFullName] = useState("");
  const [age,setAge] = useState("");
  const [address,setAddress] = useState("");
  const [dateOfBirth,setDateOfBirth] = useState("");
  const [contactNumber,setContactNumber] = useState("");
  const [gender,setGender] = useState("");
  const [nicNumber,setNicNumber] = useState("");
  const [eMail,setEmail] = useState("");
  const [workExperience,setWorkExperience] = useState("");
  const [amount,setAmount]  = useState("");


  // (local function) sendData(e: any):void
  function sendData(e){
   e.preventDefault();
   
   const newTourguide={

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



   }
   //add data to database
   axios.post("http://localhost:8070/tourguide/add",newTourguide).then(()=>{

     alert("Tourguide Added")
   }).catch((err)=>{

     alert(err)

   })

  }

  return(

    // <div class="p-3 mb-2 bg-light text-dark">


    <div className="container" class="p-3 mb-2 bg-white text-black"style={{marginTop:'40px', borderRadius:'10px'}}> 
        <form onSubmit={sendData}>
      
      

        <div class="text-center">
        <h2><strong>Add Tourguide Details</strong></h2>
      
        </div>
        
        
      
        <div class="formcontainer"></div>
        <hr/>
        <div class="container"></div>

       
        <div class="row" >
      
      
  
        
 <div class="form-group  col-md-6">
 <label for="fullName" class="form-label text-black">Tourguide Name</label>
 <input type="text" class="form-control" id="fullName" required placeholder="Enter Tourguide Name" onChange={(e)=>{

setFullName(e.target.value);

 }} /> <br/>
</div>


<div class="form-group col-md-6">
 <label for="age" class="form-label text-black">Age</label>
 <input type="text" class="form-control" id="age" required placeholder="Enter Tourguide Age"  onChange={(e)=>{

setAge(e.target.value);

}}/> <br/>
</div>

<div class="form-group col-md-6">
 <label for="address" class="form-label text-black">Address</label>
 <input type="text" class="form-control" id="address" required placeholder="Enter Tourguide Address"  onChange={(e)=>{

setAddress(e.target.value);

}}/> <br/>
</div>

<div class="form-group col-md-6">
 <label for="dateOfBirth" class="form-label text-black">Date Of Birth</label>
 <input type="date" class="form-control" id="dateOfBirth" required placeholder="Enter Tourguide Birthday"  onChange={(e)=>{

setDateOfBirth(e.target.value);

}}/> <br/>
</div>

<div class="form-group col-md-6">
 <label for="contactNumber" class="form-label text-black">Contact Number</label>
 <input type="number" class="form-control" id="contactNumber" required placeholder="Enter Tourguide Contact Number"  onChange={(e)=>{

setContactNumber(e.target.value);

}}/> <br/>
</div>

<div class="form-group col-md-6">
 <label for="gender" class="form-label text-black">Gender</label>
      <select id="gender" class="form-control" required placeholder="Gender" 
       onChange={(e)=> {

        setGender(e.target.value);

       } }><br/>
        <option selected>Male</option>
        <option>Female</option>
      </select>
          </div>


<div class="form-group col-md-6">
 <label for="nicNumber" class="form-label text-black">NIC Number</label>
 <input type="text" class="form-control" id="nicNumber" placeholder="Enter Tourguide NIC Number"  onChange={(e)=>{

setNicNumber(e.target.value);

}}/> <br/>
</div>


<div class="form-group col-md-6">
 <label for="eMail" class="form-label text-black">E mail</label>
 <input type="email" class="form-control" id="eMail" placeholder="Enter Tourguide Email"    onChange={(e)=>{

setEmail(e.target.value);

}}/> <br/>
</div>

<div class="form-group col-md-6">
 <label for="workExperience" class="form-label text-black">Work Experience</label>
 <input type="text" class="form-control" id="workExperience" placeholder="Enter Tourguide Work Expereince"  onChange={(e)=>{

setWorkExperience(e.target.value);

}}/>

</div>

<div class="form-group col-md-6">
 <label for="amount" class="form-label text-black">Amount</label>
 <input type="text" class="form-control" id="amount" placeholder="Enter Tourguide expected Amount"  onChange={(e)=>{

setAmount(e.target.value);

}}/>

</div>


</div>





<br/>

    <button  type="submit" class="btn btn-primary"  style={{marginTop:'20px' , width:'300px' ,marginRight:'300px',marginLeft:'200px',borderRadius:'20px',}}><strong>Submit</strong></button>
   
   

  <a href="/all/tourguide" class="btn btn-primary" style={{marginTop:'20px' , width:'300px' ,marginLeft:'-20px',color:"white", marginRight:"10px",borderRadius:'20px'}}><strong>Get AllTourguides</strong></a>
          
           
   

</form>


</div>


 )
}

export default AddTourguide;