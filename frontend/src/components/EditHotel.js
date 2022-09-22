import React, { useEffect, useState } from "react"
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "../style_sheets/Add.module.css";
import upImg from "../img/upImg.svg"

 import addImg from "../img/update2.svg"
 import{ BiMenu,  BiLogOut} from "react-icons/bi"
 import{ BsFillGridFill} from "react-icons/bs"
 import{FaHotel} from "react-icons/fa"

 
 import{RiAdminFill} from "react-icons/ri"
 
 import{MdFamilyRestroom} from "react-icons/md"
 
 import{GiCarKey, GiDetour} from "react-icons/gi"
 import{FaBuilding} from "react-icons/fa"
 import{GrUpdate} from "react-icons/gr"
 import{ImPrinter} from "react-icons/im"
 import{FaExternalLinkAlt} from "react-icons/fa"
 import photo from "../img/proflie.png"





export default function EditResturant() {


  
  const [name, setname] = useState("");
  const [type, settype] = useState("");
  const [location, setlocation] = useState("");
  const [price, setprice] = useState("");
  const [no_of_rooms, setno_of_rooms] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getHotels();
  }, []);

  //let navigate= useNavigate();

  function getHotels() {
    let hotel = true;

    fetch(`http://localhost:8070/hotel/get/${id}`)
      .then((res) => res.json())



      .then((result) => {
        console.log(result);
        if (hotel) {
          
          setname(result.hotel.name);
          settype(result.hotel.type);
          setlocation(result.hotel.location);
          setprice(result.hotel.price);
          setno_of_rooms(result.hotel.no_of_rooms);


        }
        
      });

    return () => (hotel = false);
  }


  function updateData(e) {

    e.preventDefault();

    //alert("Insert");

    const updateHotel = {
     
      name,
      type,
      location,
      price,
      no_of_rooms
    }

    axios
      .put(`http://localhost:8070/hotel/update/${id}`, updateHotel)
      .then(() => {
        alert(" Updated Successfully!");
        // navigate("/front");
        console.log(updateHotel);
      })
      .catch((_err) => {

        alert("Database Error");
      });
  }



  return (
    <div className={styles.body}>
       {/* navbar */}
<div className={styles.sidebar}>
        <div className={styles.logo_content}>
            <div className={styles.logo}>
                <i className={styles.logo1}><GiDetour/></i>
                <div className={styles.logo_name}> Travelo </div>
            </div>
          <i className={styles.logo2} id="btn"><BiMenu/></i>
        </div>
        <div className={styles.nav_list}>
            
            <li className={styles.list}>
            <Link to="/add/hotel" className={styles.sidelinks} >
              <i className={styles.logo3}><FaBuilding/></i>
              <span className={styles.links_name}>Add Hotel Details </span>
            </Link>
            </li>
            
            
            <li className={styles.list}>
            <Link to="/all/hotel" className={styles.sidelinks}>
              <i className={styles.logo3}><FaExternalLinkAlt/></i>
              <span className={styles.links_name}>All  Hotel  Details</span>
            </Link>
            </li>
            
            
            <li className={styles.list}>
            <Link to="/update/hotel/:id" className={styles.sidelinks}>
              <i className={styles.logo3}><GrUpdate/></i>
              <span className={styles.links_name}>Update Hotel Details </span>
            </Link>
            </li>
            
           
            <li className={styles.list}>
            <Link to="/print/hotel" className={styles.sidelinks}>
              <i className={styles.logo3}><ImPrinter/></i>
              <span className={styles.links_name}>Print Hotel Details </span>
            </Link>
            </li>
          <div className={styles.panel_content}>
            <div className={styles.panel}>
              <div className={styles.name_panel}>
                <div className={styles.name}>User Panel</div>
               
             </div>
           </div>
           <Link to="/view/hotel" type="submit"  >
           <span className={styles.user_icon}>< BiLogOut/></span>
           </Link>
            </div> 
           
        </div>
    </div>
    {/* header */}
    < div className={styles.mainContent}>
        <header className={styles.headert}>
          <h4 className={styles}>
            <label className={styles.lable1}>
            <span className={styles.icon1}>< RiAdminFill/></span>
            </label>
            Maneger Panel
          </h4>
            

             <div className={styles.userWrapper}>
             <img src={photo}  className={styles.Profile}></img>
             
             <div ></div>
              <h4>jeney Deo</h4>
              <small className={styles.userName}>Manager</small>

             </div>
        </header>
         {/* main box */}
    <main className={styles.Main1}>
      <h2>Over View</h2>
      <div className={styles.dashboardCard}>
        <div className={styles.cardSingle}>
          <div className={styles.cardBody}>
          <span className={styles.boxicon}>< FaHotel/></span>
          <div className={styles.cardname} >
            <h5>No Of Hotel</h5>
            <h4>653</h4>
          </div>
        </div>
  
 </div>

 <div className={styles.cardSingle}>
          <div className={styles.cardBody}>
          <span className={styles.boxicon}>< MdFamilyRestroom/></span>
          <div className={styles.cardname}>
            <h5>No Of Rooms</h5>
            <h4>2314</h4>
          </div>
        </div>
 
 </div>

 <div className={styles.cardSingle}>
          <div className={styles.cardBody}>
          <span className={styles.boxicon}>< GiCarKey/></span>
          <div className={styles.cardname}>
            <h5>Avalable Rooms</h5>
            <h4>516</h4>
          </div>
        </div>
 
 </div>

    </div>
    
    {/* form */}
   

<section className={styles.recent} >
<div className={styles.activityCard}>
    <h3>Add Hotel Details</h3>

<div className={styles.container}>

<form className={styles.form1} >
            
                  <div className={`form-group text-left ${styles.input}`}>
                    <input type="text" class="form-control" id="NIC" placeholder="Enter Name" value={name}
                     onChange={(e)=> {setname(e.target.value);} }/>
                </div>
   

                <div className={`form-group text-left ${styles.input}`}>
                    <input type="text" className="form-control" id="Name" placeholder="Enter Type" value={type}
                     onChange={(e)=>{settype(e.target.value);}}/>
                </div>
 


                <div className={`form-group text-left ${styles.input}`}>
                    <input type="text" class="form-control" id="Age" placeholder="Enter Location" value={location}
                     onChange={(e)=>{setlocation(e.target.value);} }/>
                </div>

                <div className={`form-group text-left ${styles.input}`}>
                    <input type="text" class="form-control" id="Email" placeholder="Enter Price" value={price} 
                    onChange={(e)=>{setprice(e.target.value);} }/>
                </div>
   

                <div className={`form-group text-left ${styles.input}`}>
                    <input type="int" class="form-control" id="Contact_Number" placeholder="Enter No Of Room" value={no_of_rooms}  
                    onChange={(e)=>{setno_of_rooms(e.target.value);} }/>
                </div>

                <div className={`form-group text-left ${styles.input1}`} >
            <button  type="button" class={styles.subBtn} onClick={updateData}> Update &nbsp;&nbsp;&nbsp;</button>&nbsp;&nbsp;
            
            </div>

    
   
    
    
   
  </form>
  </div>
  
</div>


<div className={styles.summary}>

  


</div>


<div className={styles.summary1}>


<img src={addImg} alt="Logo" className={styles.update2}/> 
</div>

 </section>
 </main>
 </div>
 </div>
 )

}
  

