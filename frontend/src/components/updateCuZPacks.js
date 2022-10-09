import React,{useEffect, useState} from "react"
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import tour from '../images/Traveller.jpg'



export default function EditCusPackz(){

    const [name,setName] = useState("");
    const [email,setMail] = useState("");
    const [phone,setPhone] = useState("");
    const [arriDate,SetDate] = useState("");
    const [pickPlace,setPlace] = useState("");
    const [destination,SetDesti] = useState("");
    const [NofDays,setNOdays] = useState("");
    const [NoPass,setNoPass] = useState("");
    const [notes,setNotes] = useState("");
  

  const { id } = useParams();

  useEffect(() => {
      getCusPacks();
    }, []);
  
    //let navigate= useNavigate();
  
    function getCusPacks() {
      let cusPack = true;
  
      fetch(`http://localhost:8070/cusPack/get/${id}`)
        .then((res) => res.json())
  
        .then((result) => {
          if (cusPack) {
            setName(result.name);
            setMail(result.email);
            setPhone(result.phone);
            SetDate(result.arriDate);
            setPlace(result.pickPlace);
            SetDesti(result.destination);
            setNOdays(result.NofDays);
            setNoPass(result.NoPass);
            setNotes(result.notes);
           
          }
          console.log(result);
        });
  
      return () => (cusPack = false);
    }

  
  function updateData(e){

      e.preventDefault();

      //alert("Insert");

      const updateCusPacks ={
       name,
       email,
       phone,
       arriDate,
       pickPlace,
       destination,
       NofDays,
       NoPass, 
       notes,
      
      }

      axios
    .patch(`http://localhost:8070/cusPack/update/${id}`, updateCusPacks)
    .then((_res) => {
      alert("Package succesfully updated");
     // navigate("/front");
      console.log(updateCusPacks);
    })
    .catch((_err) => {
      
      alert("Database Error");
    });
  }



return(
    <div className="container">
         <div class="header2" style={{ position:"absolute", right:10,top:5}} height={500} width={750}> <h1 class="header"><strong><center><div class="CuzUpText">Update customer's details</div></center></strong></h1><br></br></div>
        <img  src={tour} style={{ position:"absolute", right:170,top:140}} height={400} width={400}  alt="Card image cap"></img>
        <form className =  "CusPackages" >
          <br></br><br></br><br></br><br></br>
        <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">User Name</label>
                    <input type="text" className="form-control" id="uname" placeholder="Enter new user name" value={name} onChange={(e)=>{setName(e.target.value);}}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="iinputPid">Email</label>
                    <input type="email" className="form-control" id="Pid" placeholder="Enter your new email" value={email} onChange={(e)=>{setMail(e.target.value);} }/>
                </div>
                </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputSugges">Mobile Number</label>
                    <input type="text" className="form-control" id="suggest" placeholder="Enter new mobile number" value={phone} onChange={(e)=>{setPhone(e.target.value);} }/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputFande">Arriaval date</label>
                    <input type="date" className="form-control" id="fande" placeholder="Enter new arriaval date" value={arriDate} onChange={(e)=>{SetDate(e.target.value);} }/>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputRate">Pickup place</label>
                    <input type="text" className="form-control" id="rate" placeholder="Enter new pickup place" value={pickPlace} onChange={(e)=>{setPlace(e.target.value);} }/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputDate">Destination</label>
                    <input type="text" className="form-control" id="date" placeholder="Enter new destination" value={destination}  onChange={(e)=>{SetDesti(e.target.value);} }/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputRate">Number of days</label>
                    <input type="text" className="form-control" id="rate" placeholder="Enter new number of days" value={NofDays} onChange={(e)=>{setNOdays(e.target.value);} }/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputDate">Number of passengers</label>
                    <input type="number" className="form-control" id="date" placeholder="Enter new passenger count" value={NoPass}  onChange={(e)=>{setNoPass(e.target.value);} }/>
                </div>
            </div>
          
                <div className="form-group col-md-6">
                    <label htmlFor="inputDate">Additional notes</label>
                    <input type="text-area" className="form-control" id="date" placeholder="Enter new notes" value={notes}  onChange={(e)=>{setNotes(e.target.value);} }/>
               
            </div>

        
            
        </form><br></br><div>
               <Link to="/all2"><button class="btnBack" type="button">Back</button></Link>&nbsp;&nbsp;
                <button  class="btnUpdate2"  onClick={updateData}> Update</button>&nbsp;&nbsp;
            
            </div>
<br></br> <br></br>
 <div class="card-body"  style={{ position:"absolute", right:12,top:750}}>
 <h5 class="text-dark"><center><strong>Travelo</strong></center></h5>
 <p class="text-white"><center>copyright @2020 Travelo All rights are reserved</center></p>
 </div>
 <div class="card-footer text-muted">
   
 </div>   
            
    </div>
)

}


