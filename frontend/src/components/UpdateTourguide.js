import React,{useEffect, useState} from "react"
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";


//Update data from database

export default function UpdateTourguide(){

  const [fullName, setFullName] = useState("");
  const [age,setAge] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [nicNumber, setNicNumber] = useState("");
  const [eMail, setEmail] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [amount, setAmount] = useState("");

  const { id } = useParams();

  //get data from database
  useEffect(() => {
      getTourguides();
    }, []);
  
    //let navigate= useNavigate();
  
    function getTourguides() {
      let tourguide = true;
  
      fetch(`http://localhost:8070/tourguide/get/${id}`)
        .then((res) => res.json())
  
        .then((result) => {
          if (tourguide) {
            setFullName(result.fullName);
            setAge(result.age);
            setAddress(result.address);
            setDateOfBirth(result.dateOfBirth);
            setContactNumber(result.contactNumber);
            setGender(result.gender);
            setNicNumber(result.nicNumber);
            setEmail(result.eMail);
            setWorkExperience(result.workExperience);
            setAmount(result.amount);
           
          }
          console.log(result);
        });
  
      return () => (tourguide = false);
    }

  
  function updateData(e){

      e.preventDefault();

      //alert("Insert");

      const updateTourguide ={
        fullName,
        age,
        address,
        dateOfBirth,
        contactNumber,
        gender,
        nicNumber,
        eMail,
        workExperience,
        amount,
      }

      axios
    .patch(`http://localhost:8070/tourguide/update/${id}`, updateTourguide)
    .then((_res) => {
      alert("Tourguide Updated Successfully!");
     // navigate("/front");
      console.log(updateTourguide);
    })
    .catch((_err) => {
      
      alert("Database Error");
    });
  }



return(
  <div className="container" class="p-3 mb-2 bg-white text-black"style={{marginTop:'40px', borderRadius:'10px'}}> 
    <div className="container">
       <div class="text-center">
        <h2><strong>Update Tourguide Details</strong></h2>
        </div>
        <form className =  "tourguide">
        <div class="row">
       
  
       <div class="form-group col-md-6">
       <label for="fullName" class="form-label text-black">Tourguide Name</label>
       <input type="text" class="form-control" id="fullName" placeholder="Enter Tourguide Name" value={fullName} onChange={(e)=>{
      
      setFullName(e.target.value);
      
       }} /> <br/>
      </div>
    
      
      <div class="form-group col-md-6">
       <label for="age" class="form-label text-black">Age</label>
       <input type="text" class="form-control" id="age" placeholder="Enter Tourguide Age" value={age}  onChange={(e)=>{
      
      setAge(e.target.value);
      
      }}/> <br/>
      </div>
      
      <div class="form-group col-md-6">
       <label for="address" class="form-label text-black">Address</label>
       <input type="text" class="form-control" id="address" placeholder="Enter Tourguide Address" value={address} onChange={(e)=>{
      
      setAddress(e.target.value);
      
      }}/> <br/>
      </div>
      
      <div class="form-group col-md-6">
       <label for="dateOfBirth" class="form-label text-blak">Date Of Birth</label>
       <input type="date" class="form-control" id="dateOfBirth" placeholder="Enter Tourguide Birthday" value={dateOfBirth} onChange={(e)=>{
      
      setDateOfBirth(e.target.value);
      
      }}/> <br/>
      </div>
      
      <div class="form-group col-md-6">
       <label for="contactNumber" class="form-label text-black">Contact Number</label>
       <input type="number" class="form-control" id="contactNumber" placeholder="Enter Tourguide Contact Number" value={contactNumber}  onChange={(e)=>{
      
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
       <input type="text" class="form-control" id="nicNumber" placeholder="Enter Tourguide NIC Number" value={nicNumber} onChange={(e)=>{
      
      setNicNumber(e.target.value);
      
      }}/> <br/>
      </div>
      
      
      <div class="form-group col-md-6">
       <label for="eMail" class="form-label text-black">E mail</label>
       <input type="text" class="form-control" id="eMail" placeholder="Enter Tourguide Email" value={eMail}   onChange={(e)=>{
      
      setEmail(e.target.value);
      
      }}/> <br/>
      </div>
      
      <div class="form-group col-md-6">
       <label for="workExperience" class="form-label text-black">Work Experience</label>
       <input type="text" class="form-control" id="workExperience" placeholder="Enter Tourguide Work Expereince" value={workExperience} onChange={(e)=>{
      
      setWorkExperience(e.target.value);
      
      }}/>
      
      </div>

      <div class="form-group col-md-6">
       <label for="amount" class="form-label text-black">Amount</label>
       <input type="text" class="form-control" id="amount" placeholder="Enter Tourguide expected Amount" value={amount} onChange={(e)=>{
      
      setAmount(e.target.value);
      
      }}/>
      
      </div>
      
      
      </div>
      
            
        </form><br></br><div>
            
               
            
            
            </div>
         
    < button type="button" class="btn btn-primary" style={{marginTop:'20px' , width:'300px' ,marginRight:'300px',marginLeft:'200px',borderRadius:'20px',color:'white'}}  onClick={updateData}><strong>Update Tourguide Details</strong></button>
    
    <a href="/all/tourguide" class="btn btn-primary" style={{marginTop:'20px' , width:'300px' ,marginLeft:'-20px',color:"white",borderRadius:'20px'}}><strong>Get Updated Tourguides</strong></a>
    
    </div>
    </div>
            
 
 )

}

