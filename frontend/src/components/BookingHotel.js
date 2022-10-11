import React, {useState} from "react"
import axios from "axios";
import styles from "../style_sheets/Booking.module.css";
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import photo0 from "../img/hl0.jpg"
import photo1 from "../img/hl1.jpg"
import photo2 from "../img/hl2.jpg"
import photo3 from "../img/hl3.jpg"
import photo4 from "../img/hl4.jpg"
import photo5 from "../img/hl5.jpg"
import photo6 from "../img/hl6.jpg"
import photo7 from "../img/hl7.jpg"
import logo from "../img/logo.png"




export default function BookingHotel(){

  const [check_in_date, setcheck_in_date] = useState("");
  const [check_out_date, setcheck_out_date] = useState("");
  const [no_of_guest, setno_of_guest] = useState("");
  const [no_of_rooms, setno_of_rooms] = useState("");


  function sendData(e){
    e.preventDefault();
    const newRoom = {
check_in_date,
check_out_date,
no_of_guest,
no_of_rooms

    }
  
    axios.post("http://localhost:8070/room/insert", newRoom).then(() => {
      alert("room added")

    } ).catch((err) =>{
      alert(err)

    })
  }
    
return (

    <div class= "body">
       

<section  className={styles.home2} >
   
   

   
</section>

   

    

    
  <div class= "container">
     <div class="row">
       <div class="col-lg-12 bg-white shadow p-4 rounded">
           <h5>Check Booking Availability</h5>
               <form  className={styles.form1} onSubmit={sendData}>
                  <div className={`row ${styles.input}`}>
                     
                     <div className="col-lg-3 mb-1">
                         <label class="form-label" className={styles.label}>Check In Date</label>
                            <input type="date" style={{height: "50px"}} class="form-control shadow-none" id="name" placeholder="Enter name"
                             onChange ={(e) => {
                             setcheck_in_date(e.target.value)
                              }}/>
                     </div>

                     <div className="col-lg-3 mb-3">
                         <label class="form-label" className={styles.label}>Check Out Date</label>
                            <input type="date" style={{height: "50px"}} class="form-control shadow-none" id="name" placeholder="Enter name"
                             onChange ={(e) => {
                             setcheck_out_date(e.target.value)
                              }}/>
                     </div>

                     <div className="col-lg-3 mb-3">
                         <label class="form-label" className={styles.label}>No Of Guest</label>
                            <input type="text" style={{height: "50px"}} class="form-control shadow-none" id="name" placeholder="Enter name"
                             onChange ={(e) => {
                             setno_of_guest(e.target.value)
                              }}/>

                              
                     </div>

                     <div className="col-lg-2 mb-3">
                         <label class="form-label" className={styles.label}>No Of Rooms</label>
                            <input type="text" style={{height: "50px"}} class="form-control shadow-none" id="name" placeholder="Enter name"
                             onChange ={(e) => {
                             setno_of_rooms(e.target.value)
                              }}/>
                     </div>

                     <div  className={`col-lg-1 ${styles.btn1}`}>
                     <Link class="btn btn-primary" style={{weight: "50px", background: "#87C1FF"}} type="submit" to={`/checkout`} >Submit</Link>
                     </div>

                 </div>
               </form>
            </div>
   </div >
</div>
   


     
    {/* <!--gallery section---> */}
	<div  className={styles.gallery}>
    <h1>Our <span>gallery</span></h1>
    <div  className={styles.main_gallery}>
        <div  className={styles.inner_gallery}>
               <img src={photo0}  className={styles.hl0}></img>
            
        </div>
        <div  className={styles.inner_gallery}>
               <img src={photo1}  className={styles.hl1}></img>
            
        </div>
        <div  className={styles.inner_gallery}>
               <img src={photo2}  className={styles.hl2}></img>
            
        </div>
        <div  className={styles.inner_gallery}>
               <img src={photo3}  className={styles.hl3}></img>
            
        </div>
        <div  className={styles.inner_gallery}>
               <img src={photo4}  className={styles.hl4}></img>
            
        </div>

        <div  className={styles.inner_gallery}>
               <img src={photo5}  className={styles.hl5}></img>
            
        </div>

         <div  className={styles.inner_gallery}>
               <img src={photo6}  className={styles.hl6}></img>
            
        </div>
        <div  className={styles.inner_gallery}>
               <img src={photo7}  className={styles.hl7}></img>
            
        </div>
        
    </div>
</div>
</div>
 

)
              }



 