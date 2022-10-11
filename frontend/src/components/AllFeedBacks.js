import React,{Component} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import galle from '../images/Travelo.jpeg'

import '../App.css';

//import Package from "../../../TourPackage/BACKEND/models/Package";



export default class cusP extends Component{


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

     <div className="container">
    
     <br></br>
    <div class="header3"><img class="logo" src={galle} style={{ position:"absolute", right:1280,top:15}} height={50} width={200}  alt="Card image cap"></img>
     <a class="btnHome2" href="/man"  style={{ position:"absolute", right:120,top:20}}>Home</a>
     <div> <h1><strong><center>Manage customer's packages</center></strong></h1><br></br></div></div> 
    <br></br><br></br><br></br>
    



    <br></br>
     <table class="table table-white table-white">
     <thead>
     <tr class="tableHeaders">
          <th scope="col">Count</th>
          <th scope="col">User name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Arriaval date</th>
          <th scope="col">Pickup place</th>
          <th scope="col">Destination</th>
          <th scope="col">Num of days</th>
          <th scope="col">Notes</th>
          <th scope="col">Actions</th>
        
 
 
     </tr>
    </thead>
    <tbody>

      {this.state.cusPacks.map((cusPacks,index)=>(

       <tr class="rows4">
         <th scope="row">{index+1}</th>
         <td>{cusPacks.name}</td>
         <td>{cusPacks.email}</td>
         <td>{cusPacks.phone}</td>
         <td>{cusPacks.arriDate}</td>
         <td>{cusPacks.pickPlace}</td>
         <td>{cusPacks.destination}</td>
         <td>{cusPacks.NofDays}</td>
         <td>{cusPacks.notes}</td>
     

         <td>
         <div><a  class="BtnUpdateSp"  href={`/cuzup/${cusPacks._id}`}>Update</a> <br></br><br></br>     
         <a  class="BtnDeleSp" onClick={()=>this.onDelete(cusPacks._id)}>&nbsp;Cancel</a> </div>
       </td>
       </tr>

      ))}

    </tbody>



    </table>
   
    <td></td>
    
   


 <div class="card-body"  style={{ position:"absolute", right:10,top:600}}>
 <h5 class="text-dark"><center><strong>Travelo</strong></center></h5>
 <p class="text-white"><center>copyright @2020 Travelo All rights are reserved</center></p>
 </div>
 <div class="card-footer text-muted">
   
 </div>
</div>
  

 
     

   

   ) 
}

}
 
 
 
 
 
 /*
 <div style={{ position:"relative", right:150,top:200}}><a  class="BtnUpdateSp"  href={`/cuzup/${cusPacks._id}`}>Update</a> <br></br><br></br>
 <a  class="BtnDeleSp" onClick={()=>this.onDelete(cusPacks._id)}>&nbsp;Cancel</a> </div>*/