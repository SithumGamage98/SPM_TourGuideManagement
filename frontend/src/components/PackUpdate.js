import React,{useEffect, useState} from "react"
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../style_sheets/Style.css";
import galle from '../img/Travelo.jpeg'



export default function EditPack(){

  const [name, setName] = useState("");
  const [packId, setPackID] = useState("");
  const [destination, setDesti] = useState("");
  const [numofdays, setDys] = useState("");
  const [nopass, setNopass] = useState("");
  const [hotel, setHotel] = useState("");
  const [transport, setTrans] = useState("");
  const [tourGuide, setGuide] = useState("");
  const [totPrice, setPrice] = useState("");

  const { id } = useParams();

  useEffect(() => {
      getPackages();
    }, []);
  
    //let navigate= useNavigate();
  
    function getPackages() {
      let Package = true;
  
      fetch(`http://localhost:8070/package/get/${id}`)
        .then((res) => res.json())
  
        .then((result) => {
          if (Package) {
            setName(result.name);
            setPackID(result.packId);
            setDesti(result.destination);
            setDys(result.numofdays);
            setNopass(result.nopass);
            setHotel(result.hotel);
            setTrans(result.transport);
            setGuide(result.tourGuide);
            setPrice(result.totPrice);
           
          }
          console.log(result);
        });
  
      return () => (Package = false);
    }

  
  function updateData(e){

      e.preventDefault();

      //alert("Insert");

      const updatePackage ={
        name,
        packId,
        destination,
        numofdays,
        nopass,
        hotel,
        transport,
        tourGuide,
        totPrice
      }

      axios
    .patch(`http://localhost:8070/package/update/${id}`, updatePackage)
    .then((_res) => {
      alert("Package successfully updated");
     // navigate("/front");
      console.log(updatePackage);
    })
    .catch((_err) => {
      
      alert("Database Error");
    });
  }



return(

  
          <div className="container">
           <br></br>
   <div style={{ position:"absolute", right:20,top:10}}> <div class="header3"><img class="logo" src={galle} style={{ position:"absolute", right:1280,top:15}} height={50} width={200}  alt="Card image cap"></img>
     <a class="btnHome2" href="/man"  style={{ position:"absolute", right:120,top:20}}>Home</a>
     <div> <h1><strong><center>Update package details</center></strong></h1><br></br></div></div> </div>
    <br></br><br></br><br></br><br></br>
       
      <form class="hh" className="form-group" style={{right:1200}}>
         <div className="form-row" style={{width:"900px"}}>
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Package Name *</label>
                    <input type="text" className="form-control" id="name" placeholder="Package Name" value={name} onChange={(e)=>{setName(e.target.value);}}/>
                </div><br></br>
                <div className="form-group col-md-6">
                    <label htmlFor="iinputPid">Package ID *</label>
                    <input type="text" className="form-control" id="packId" placeholder="Package ID" value={packId} onChange={(e)=>{setPackID(e.target.value);} }/>
                </div><br></br>
          

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputSugges">Destination *</label>
                    <input type="text" className="form-control" id="desti" placeholder="Enter Destination" value={destination} onChange={(e)=>{setDesti(e.target.value);} }/>
                </div><br></br> 
              
             </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputFande">Number of passengers *</label>
                    <input type="number" className="form-control" id="nOfP" placeholder="Enter passengers between 1 and 15" min="1" max="15" value={nopass} onChange={(e)=>{setNopass(e.target.value);} }/>
                </div>
            </div> <div className="form-row" style={{width:"900px"}}>
                <div className="form-group col-md-6">
                    <label htmlFor="inputRate">Number of days *</label>
                    <input type="number" className="form-control" id="days" placeholder="Enter days between 1 and 7" min="1" max="7" value={numofdays} onChange={(e)=>{setDys(e.target.value);} }/>
                </div>
            </div><br></br>
           
         
             </form>
             <form className="form-group" style={{width:"20px"}}>
             <div style={{position:"absolute",top:100,right:250}} >
              
                <div className="form-group col-md-6" style={{width:"500px"}}>
                    <label htmlFor="inputDate">Hotel/Other</label>
                    <select type="text" className="form-control" id="hotel" required placeholder="Hotel name" value={hotel}  onChange={(e)=>{setHotel(e.target.value);} }>

                    <option selected>None</option>
                     <option>Camping</option>
                     <option>NCG Holiday (pvt)</option>
                     <option>Jitwing (pvt)</option>
                     <option>Paradice resolt Rsd(pvt)</option>
       </select>
                </div><br></br>

           
            <div className="form-row">
                <div className="form-group col-md-6" style={{width:"500px"}}>
                    <label htmlFor="inputRate">Transport</label>
                    <select type="text" className="form-control" id="trans" required placeholder="Transport company name" value={transport} onChange={(e)=>{setTrans(e.target.value);} }>
                    <option selected>None</option>
                        <option>Dilanka Cabs/Transports</option>
                        <option>NCG Transport(pvt)</option>
                        <option>Selinaiyo Lanka Vehicle Center</option>
                        <option>SK and sons(pvt)</option>
                        </select>


                        
                </div><br></br>
                <div className="form-group col-md-6" style={{width:"500px"}}>
                    <label htmlFor="inputDate">Tour guide</label>
                    <select type="text" className="form-control" id="guide" placeholder="with/without" value={tourGuide}  onChange={(e)=>{setGuide(e.target.value);} }>
                    <option selected>with</option>
                    <option>without</option>
                      
                    </select>

                </div>
                
            </div><br></br>

            <div className="form-row" >
                <div className="form-group col-md-6" style={{width:"500px"}}>
                    <label htmlFor="inputRate">Total price(Rs) *</label>
                    <input type="text" className="form-control" id="days" placeholder="Enter total price here" value={totPrice} onChange={(e)=>{setPrice(e.target.value);} }/>
                </div>
        
                
            </div>
        
        </div>
        
        </form>
             
           <Link to="/all"><button class="btnBack" type="button">Back</button></Link>&nbsp;&nbsp;
           <button class="btnUpdate2" onClick={updateData}>Update&nbsp;&nbsp;&nbsp;</button>&nbsp;&nbsp;
           
  
       <br></br><br></br>
      
     <div class="card-body" style={{ position:"absolute", right:14,top:600} }>
  <h5 class="text-dark"><center><strong>Travelo</strong></center></h5>
  <p class="text-white"><center>copyright @2020 Travelo All rights are reserved</center></p>
  </div>
  <div class="card-footer text-muted">
    
  </div>
           
            </div>
            
            
 
 )

}