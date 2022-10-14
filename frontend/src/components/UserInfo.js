import React,{Component} from "react";
import axios from "axios";
import './userstyle.css';
import img7 from "../images/img7.jpg";
//import Tourguide from "../../../Tourguide/BACKEND/models/Tourguide";



//retrieve data from database
// view data to the user
export default class UserInfo extends Component{

   constructor(props){

      super(props);

      this.state={

       
       
       tourguides:[]
      };

  }
  //retrieve data from database
 componentDidMount(){

  this.retriveTourguides();
 }
 retriveTourguides(){

  axios.get("http://localhost:8070/tourguide/all").then(res=>{

     if(res.data.success){
         this.setState({

           tourguides:res.data.existingTourguides

         });

         console.log(this.state.tourguides)

     }


  })



 }



 
//Search data
filterContent(tourguides,searchTerm){

  const results=tourguides.filter((tourguides)=>tourguides.fullName.toLowerCase().includes(searchTerm));
  this.setState({tourguides:results});

}



handleTextSearch=(e)=>{

   const searchTerm=e.currentTarget.value;
   axios.get("http://localhost:8070/tourguide/all").then(res=>{

    if(res.data.success){
       this.filterContent(res.data.existingTourguides,searchTerm)
    }
});

}; 








render(){

   return(

      <div className="container" class="p-3 mb-2 bg-white text-black">
        

<div className="row">
<div class = "Headername">
<h2><center><strong>Tourguide details</strong></center></h2>
</div>
<div class="ImageFile">
<img  src={img7}  alt="travel image"></img>
</div>

         <div className="col-lg-9 mt-2 mb-2" >
            <div class = "search">
            <h6><strong>Search Tourguide name here</strong></h6>
            </div>
            <div class="input-group"> 
  
   

</div>

       </div>
       <div class= "Searchbar">
           
          
         <div className="col-lg-3 mt-2 mb-2" class="text-center"  >
        
          
               <input
                className="form-control"
                type="search"
                placeholder="Search"
                name="searchTerm"
                onChange={this.handleTextSearch}
               
               ></input>
  
  
         </div>
         </div>
         <br>
         
         </br>
        <br>
        </br>
        <br>
        
      </br>
       <br>
       </br>
        {this.state.tourguides.map((tourguides)=>(


        <center>
  
  <ul > <div class = "col-sm-6"> <div class="card4 " >
  <div class="SeeAllCuzPacks">
    <li><div class="si">Name</div><div class="siname">{tourguides.fullName}</div> </li>
    <li class="list-group-item"><div class="si">Age</div><div class="userInputes">{tourguides.age}</div></li>
    <li class="list-group-item"><div class="si">Date of birth</div><div class="userInputes">{tourguides.dateOfBirth}</div></li>
    <li class="list-group-item"><div class="si">Contact Number</div> <div class="userInputes">{tourguides.contactNumber}</div></li>
    <li class="list-group-item"><div class="si">Gender</div><div class="userInputes">{tourguides.gender}</div></li>
    <li class="list-group-item"><div class="si">E mail</div><div class="userInputes">{tourguides.eMail}</div></li>
    <li class="list-group-item"><div class="si">Work Experience</div><div class="userInputes">{tourguides.workExperience}</div></li>
    <li class="list-group-item"><div class="si">Amount</div><div class="userInputes">{tourguides.amount}</div></li>
   
    <button  type="submit" class="btn btn-primary"  style={{marginTop:'20px' , width:'300px' ,marginRight:'300px',marginLeft:'180px',borderRadius:'20px',marginBottom:'20px'}}><strong>Book Now</strong></button>
 
</div>  
</div>
</div>
</ul>
</center>
        
        ))}



   
   
     </div>

    </div>

    )
        }

      }