import React, { Component } from "react";
import axios from "axios";

import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
 import styles from "../style_sheets/All.module.css";
 import addImg from "../img/addImg.svg"
import { BiMenu, BiLogOut } from "react-icons/bi"
import { BsFillGridFill } from "react-icons/bs"
import { FaHotel } from "react-icons/fa"

import { RiAdminFill } from "react-icons/ri"

import { MdFamilyRestroom } from "react-icons/md"

import { GiCarKey } from "react-icons/gi"
import { FaBuilding } from "react-icons/fa"
import { GrUpdate } from "react-icons/gr"
import { ImPrinter } from "react-icons/im"
import { FaExternalLinkAlt } from "react-icons/fa"
import photo from "../img/proflie.png"




export default class report extends Component {


   constructor(props) {

      super(props);

      this.state = {

         hotels: []
      };

   }
   componentDidMount() {

      this.retriveHotels();
   }
   retriveHotels() {

      axios.get("http://localhost:8070/hotel/all").then(res => {

         if (res.data.success) {
            this.setState({

               hotels: res.data.existingHotels

            });

            console.log(this.state.hotels)

         }


      })



   }





   onDelete(id) {

      fetch(`http://localhost:8070/hotel/delete/${id}`, {

         method: `DELETE`




      }).then((result) => {

         result.json().then((resp) => {

            console.warn(resp)
            alert("Deleted Succsessfull")
            this.retriveHotels()

         })


      })



   }

   repotGen= ()=>{
    window.print();
}

   render() {

  

      return (
         <div className={styles.body}>
                        <div className={styles.sidebar}>
               <div className={styles.logo_content}>
                  <div className={styles.logo}>
                     <i className={styles.logo1}><BiMenu /></i>
                     <div className={styles.logo_name}> fzv </div>
                  </div>
                  <i className={styles.logo2} id="btn"><BiMenu /></i>
               </div>
               <div className={styles.nav_list}>

                  <li className={styles.list}>
                     <Link to="/add/hotel" className={styles.sidelinks} >
                        <i className={styles.logo3}><FaBuilding /></i>
                        <span className={styles.links_name}>Add Hotel Details </span>
                     </Link>
                  </li>


                  <li className={styles.list}>
                     <Link to="/all/hotel" className={styles.sidelinks}>
                        <i className={styles.logo3}><FaExternalLinkAlt /></i>
                        <span className={styles.links_name}>All  Hotel  Details</span>
                     </Link>
                  </li>


                  <li className={styles.list}>
                     <Link to="/update/hotel/:id" className={styles.sidelinks}>
                        <i className={styles.logo3}><GrUpdate /></i>
                        <span className={styles.links_name}>Update Hotel Details </span>
                     </Link>
                  </li>


                  <li>
                     <Link to="/report/hotel" className={styles.sidelinks}>
                        <i className={styles.logo3}><ImPrinter /></i>
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
                        <span className={styles.user_icon}>< BiLogOut /></span>
                     </Link>
                  </div>
               </div>
            </div>

            < div className={styles.mainContent}>
                    {/* header */}
                    <header className={styles.headert}>
                  <h4>
                     <label>
                        <span className={styles.icon1}>< RiAdminFill /></span>
                     </label>
                     Maneger Panel
                  </h4>



                  <div className={styles.userWrapper}>
                     <img src={photo} alt="Travelo logo" className={styles.Profile}></img>

                     <div ></div>
                     <h4>jeney Deo</h4>
                     <small className={styles.userName}>Manager</small>

                  </div>
               </header>

               <main className={styles.Main1}>
               <h2>Orver View</h2>
                  <div className={styles.dashboardCard}>
                     <div className={styles.cardSingle}>
                        <div className={styles.cardBody}>
                           <span className={styles.boxicon}>< FaHotel /></span>
                           <div className={styles.cardname} >
                              <h5>No Of Hotel</h5>
                              <h4>653</h4>
                           </div>
                        </div>

                     </div>

                     <div className={styles.cardSingle}>
                        <div className={styles.cardBody}>
                           <span className={styles.boxicon}>< MdFamilyRestroom /></span>
                           <div className={styles.cardname}>
                              <h5>No Of Rooms</h5>
                              <h4>2314</h4>
                           </div>
                        </div>

                     </div>

                     <div className={styles.cardSingle}>
                        <div className={styles.cardBody}>
                           <span className={styles.boxicon}>< GiCarKey /></span>
                           <div className={styles.cardname}>
                              <h5>Avalable Rooms</h5>
                              <h4>516</h4>
                           </div>
                        </div>

                     </div>

                  </div>


        <div class=" text-center ">
             < font face = "Comic sans MS" size = "8" class="pb-2  "  > <strong>Print Hotel Details </strong> </font>
        
  
         <section class=" p-3" style={{backgroundColor:"#fff"}}>
            
           
            
           
            <div class = "table-responsive" >
  
            <table className={styles.content_table} >
               <thead className = {styles.dark}>
                  <tr>
                  <th scope="col">No</th>
                     <th scope="col">Hotel Name</th>
                     <th scope="col">Type</th>
                     <th scope="col">Location</th>
                     <th scope="col">Price</th>
                     <th scope="col">No Of Rooms</th>
                     
                  </tr>
               </thead>
              
              
               <tbody>
                        {this.state.hotels.map((hotels, index) => (

                     <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{hotels.name}</td>
                        <td>{hotels.type}</td>
                        <td>{hotels.location}</td>
                        <td>{hotels.price}</td>
                        <td>{hotels.no_of_rooms}</td>
                        

                      


                     </tr>

                  ))}






               </tbody>



            </table>
    
    
            <button class={styles.btn_table2} onClick={this.repotGen}>print</button>
            </div>

       
         </section>
         </div>
         </main>
         </div>
         </div>
         
        


      )
   }

}