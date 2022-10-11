import React,{Component} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import galle from '../img/Travelo.jpeg'
import myStyle from "../style_sheets/Style.module.css";
//import Package from "../../../TourPackage/BACKEND/models/Package";



export default class AllPacks extends Component{


   constructor(props){

       super(props);

       this.state={

        packages:[]
       };

   }
  componentDidMount(){

   this.retrivePackages();
  }
  retrivePackages(){

   axios.get("http://localhost:8070/package/all").then(res=>{

      if(res.data.success){
          this.setState({

            packages:res.data.existingPackages

          });

          console.log(this.state.packages)

      }


   })



  }
 


  
     
  onDelete(id){

     fetch(`http://localhost:8070/package/delete/${id}`,{

           method:`DELETE`




     }).then((result)=>{

         result.json().then((resp)=>{

           console.warn(resp)
           alert("Deleted Succsessfull")
           this.retrivePackages()

         })


     })
    


  }


   //Filter /Search Mechod
 filterContent(packages,searchTerm){

  const results=packages.filter((packages)=>packages.packId.toLowerCase().includes(searchTerm));
  this.setState({packages:results});

}



handleTextSearch=(e)=>{

   const searchTerm=e.currentTarget.value;
   axios.get("http://localhost:8070/package/all").then(res=>{

    if(res.data.success){
       this.filterContent(res.data.existingPackages,searchTerm)
    }
});

}; 





 render(){

    return(

      <div className="container">
      <br></br>
    <div class={myStyle.header3}><img class="logo" src={galle} style={{ position:"absolute", right:1280,top:15}} height={50} width={200}  alt="Card image cap"></img>
     <a class={myStyle.btnHome2} href="/man"  style={{ position:"absolute", right:120,top:20}}>Home</a>
     <div> <h1><strong><center>Manage package details</center></strong></h1><br></br></div></div> 
    <br></br><br></br><br></br>
    
    
     <h4 style={{ position:"absolute", right:1100,top:120}} class={myStyle.PackDetails}>Enter Pack_ID here</h4>
     
     <center>
      <div className="col-lg-3 mt-2 mb-2" class="text-center"  style={{ right:"100px" , width:600}} >
          
        <br></br><br></br>
          <input
           className="form-control"
           type="search"
           placeholder="Search"
           name="searchTerm"
           onChange={this.handleTextSearch}
          
          ></input>


    </div><br></br>
  </center>
      <table class="table table-white table-white">
      <thead>
      <tr class={myStyle.tableHeaders}>
           <th scope="col">Count</th>
           <th scope="col">Pack_Name</th>
           <th scope="col">Pack_ID</th>
           <th scope="col">Destination</th>
           <th scope="col">Num_Of_Days</th>
           <th scope="col">Num_Of_Passengers</th>
           <th scope="col">Hotel/Other</th>
           <th scope="col">Transport</th>
           <th scope="col">Tourguide</th>
           <th scope="col">Total_Price(Rs)</th>
           <th scope="col">Action</th>
  
  
      </tr>
     </thead>
     <tbody>

       {this.state.packages.map((packages,index)=>(

        <tr class={myStyle.rows4}>
          <th scope="row">{index+1}</th>
          <td>{packages.name}</td>
          <td>{packages.packId}</td>
          <td>{packages.destination}</td>
          <td>{packages.numofdays}</td>
          <td>{packages.nopass}</td>
          <td>{packages.hotel}</td>
          <td>{packages.transport}</td>
          <td>{packages.tourGuide}</td>
          <td>{packages.totPrice}</td>



          <td>

          <div><a class={myStyle.btnUpdate} href = {`/update/${packages._id}`}  style={{width:"200px"}}>Update</a> </div> 
                   
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <a class={myStyle.btnDelete}  onClick={()=>this.onDelete(packages._id)} style={{width:"200px"}}> Delete </a>&nbsp;&nbsp;&nbsp;
        </td>
        </tr>

       ))}

     </tbody>



     </table>
    
     <td></td>
     
    
 
 
  <div class="card-body" style={{ position:"absolute", right:20,top:900}}>
  <h5 class="text-dark"><center><strong>Travelo</strong></center></h5>
  <p class="text-white"><center>copyright @2020 Travelo All rights are reserved</center></p>
  </div>
  <div class="card-footer text-muted">
    
  </div>
</div>
   

  
      

    

    ) 
 }

 }