import React,{Component} from "react";
import axios from "axios";
import Train from '../img/my23.jpg'
import '../App.css';
//import Package from ".../src/Package";
//import Package from "../../../TourPackage/BACKEND/models/Package";



export default class cusPack extends Component{


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

 //Filter /Search Mechod
 filterContent(packages,searchTerm){

    const results=packages.filter((packages)=>packages.destination.toLowerCase().includes(searchTerm));
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

     //<i class="fa-solid fa-plane-departure"></i>

      <div>
      <div className="container">  
      
      <div class="text-center"><img class="img-fluid" src={Train} height={100} width={600}  alt="Card image cap" /></div>
      <a className="customize" href="/edit/cusPack"  class="btnSubmit2" style={{position:"absolute",right:150,top:410,}}><strong><i className="fa-solid fa-plane-departure"></i>&nbsp;&nbsp;Customize Your Tour</strong></a>&nbsp;&nbsp;
      <div className="row">
      <div className="col-lg-9 mt-2 mb-2">
      <h3 className="Ball" class="tableH"><strong>Search your Destination </strong></h3>
          

       </div>
       <center>
      <div className="col-lg-3 mt-2 mb-2" class="text-center"   style={{ right:"100px" , width:600}} >
          
        
          <input
           className="form-control"
           type="search"
           placeholder="Search"
           name="searchTerm"
           onChange={this.handleTextSearch}
          
          ></input>


    </div><br></br>
  </center></div>

     <br></br>
      <table class="table">
      <thead class="thead-primary">
      <tr>
           
           <th scope="col" class="tableH">Package Name</th>
           <th scope="col" class="tableH">Destination</th>
           <th scope="col" class="tableH">NumberofDays</th>
           <th scope="col" class="tableH">NumberofPassengers</th>
           <th scope="col" class="tableH">TotalPrice(Rs)</th>
          
  
  
      </tr>
     </thead>
     <tbody>

       {this.state.packages.map((packages,index)=>(

        <tr>
       
          <td>{packages.name}</td>
          <td class="desti">{packages.destination}</td>
          <td class="num">{packages.numofdays}</td>
          <td class="num">{packages.nopass}</td>
          <td class="totPrice2">{packages.totPrice}</td>

         
   

        </tr>
        

       ))}



     </tbody>



     </table>

      
     <a href="/search/destination" class="btnBack"><strong>Back</strong></a>&nbsp;&nbsp;
     
      
      </div>

      <br></br>
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