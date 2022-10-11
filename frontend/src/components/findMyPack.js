import React,{Component} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import tour from '../img/findPhoto.jpg'
import '../App.css';
import myStyle from "../style_sheets/Style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

//import Package from "../../../TourPackage/BACKEND/models/Package";



export default class findMyPack extends Component{


   constructor(props){

       super(props);

       this.state={

       cusPacks:[]
       };

   }
  componentDidMount(){

   this.retriveCusPacks();
  }
  retriveCusPacks(){

   axios.get("http://localhost:8070/cusPack/all4").then(res=>{

      if(res.data.success){
          this.setState({

            cusPacks:res.data.existingCusPacks

          });

          console.log(this.state.cusPacks)

      }


   })



  }



  
  
  onDelete(id){

     fetch(`http://localhost:8070/cusPack/delete/${id}`,{

           method:`DELETE`




     }).then((result)=>{

         result.json().then((resp)=>{

           console.warn(resp)
           alert("Package Cancelled...!!")
           this.retriveCusPacks()

         })


     }) 
    


  }

  //Filter /Search Mechod
 filterContent(cusPacks,searchTerm){

  const results=cusPacks.filter((cusPacks)=>cusPacks.name.toLowerCase().includes(searchTerm));
  this.setState({cusPacks:results});

}



handleTextSearch=(e)=>{

   const searchTerm=e.currentTarget.value;
   axios.get("http://localhost:8070/cusPack/all4").then(res=>{

    if(res.data.success){
       this.filterContent(res.data.existingCusPacks,searchTerm)
    }
});

}; 

 render(){

    return(
    <div>
      <div className="container" class="p-3 mb-2 bg-white">
      <img class="logo" src={tour} style={{ position:"absolute", right:100,top:300}} height={500} width={600}  alt="Card image cap"></img>
      <h4 style={{position:"absolute", right:1100,top:140}} class={myStyle.PackDetails}>Enter your user name</h4> <br></br><br></br><br></br>
     
      <div   style={{ position:"absolute",right:"500px", width:600}} >
          
        
          <input
           className="form-control"
           type="search"
           placeholder="Search"
           name="searchTerm"
           onChange={this.handleTextSearch}
          
          ></input></div>
   
    
<br></br><br></br><br></br><br></br>
     {this.state.cusPacks.map((cusPacks,index)=>(

   

<center>
  
  <ul > <div class = "row row-cols-10 row-cols-md-2 g-4"> <div class={myStyle.card4} >
   <div class={myStyle.SeeAllCuzPacks}>
    <li><div class="si">Name</div><div class={myStyle.siname}>{cusPacks.name}</div> </li>
    <li class="list-group-item"><div class={myStyle.si}>Email</div><div class={myStyle.userInputes}>{cusPacks.email}</div></li>
    <li class="list-group-item"><div class={myStyle.si}>Phone</div><div class={myStyle.userInputes}>{cusPacks.phone}</div></li>
    <li class="list-group-item"><div class={myStyle.si}>Arriaval Date</div> <div class={myStyle.userInputes}>{cusPacks.arriDate}</div></li>
    <li class="list-group-item"><div class={myStyle.si}>Pickup place</div><div class={myStyle.userInputes}>{cusPacks.pickPlace}</div></li>
    <li class="list-group-item"><div class={myStyle.si}>Destination</div><div class={myStyle.userInputes}>{cusPacks.destination}</div></li>
    <li class="list-group-item"><div class={myStyle.si}>Number of days</div><div class={myStyle.userInputes}>{cusPacks.NofDays}</div></li>
    <li class="list-group-item"><div class={myStyle.si}>Notes</div><div class={myStyle.userInputes}>{cusPacks.notes}</div></li>
   
   
</div>
</div>  
</div>     
<div>
 </div>
  </ul></center>

     ))}

     
  </div>

  <p style={{ position:"absolute", right:100,top:760}}>If you want to change or delete your tour package,please contact package manager!</p>
  <Link to="/all2" style={{ position:"absolute", right:300,top:800}}><button class={myStyle.btnBack} type="button">Contact manager</button></Link>&nbsp;&nbsp;

  <div class="card-body">
  <h5 class="text-dark"><center><strong>Travelo</strong></center></h5>
  <p class="text-white"><center>copyright @2020 Travelo All rights are reserved</center></p>
  </div>
  <div class="card-footer text-muted">
 </div>


  </div>
     
  


    ) 
 }

 }