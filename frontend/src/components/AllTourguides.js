import React,{Component} from "react";
import axios from "axios";
//import Tourguide from "../../../Tourguide/BACKEND/models/Tourguide";



export default class AllTourguides extends Component{


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



  //delete data from database
     
  onDelete(id){

     fetch(`http://localhost:8070/tourguide/delete/${id}`,{

           method:`DELETE`




     }).then((result)=>{

         result.json().then((resp)=>{

           console.warn(resp)
           alert("Deleted Succsessfull")
           this.retriveTourguides()

         })




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

<h2><center><strong>Manage Tourguide details</strong></center></h2>
         <div className="col-lg-9 mt-2 mb-2">
            <h6><strong>Search Tourguide name here</strong></h6>
            
  
         </div>
         
         <div className="col-lg-3 mt-2 mb-2" class="text-center">
            
          
               <input
                className="form-control"
                type="search"
                placeholder="Search"
                name="searchTerm"
                onChange={this.handleTextSearch}
               
               ></input>
  
  
         </div>
         





      
      <table className="table  table-hover" style={{marginTop:'40px'}}>
      <thead>
      <tr>
      <th scope="col">#</th>
           <th scope="col">full Name</th>
           <th scope="col">Age</th>
           <th scope="col">Address</th>
           <th scope="col">Date of birth</th>
           <th scope="col">Contact Number</th>
           <th scope="col">Gender</th>
           <th scope="col">Nic number</th>
           <th scope="col">E mail</th>
           <th scope="col">Work Experience</th>
           <th scope="col">Amount</th>
        
  
  
      </tr>
     </thead>
     <tbody>

       {this.state.tourguides.map((tourguides,index)=>(

        <tr>
          <th scope="row">{index+1}</th>
          <td>{tourguides.fullName}</td>
          <td>{tourguides.age}</td>
          <td>{tourguides.address}</td>
          <td>{tourguides.dateOfBirth}</td>
          <td>{tourguides.contactNumber}</td>
          <td>{tourguides.gender}</td>
          <td>{tourguides.nicNumber}</td>
          <td>{tourguides.eMail}</td>
          <td>{tourguides.workExperience}</td>
          <td>{tourguides.amount}</td>



          <td>
          <a className="btn btn-dark" style={{color:"white"}} href={`/update/${tourguides._id}`}>Update</a>&nbsp;
            
             </td>
             
          <td>
             <button  type= "button" class="btn btn-danger" onClick ={()=>this.onDelete(tourguides._id)}>Delete</button>
            
             </td>



        </tr>

       ))}



     </tbody>



     </table>
    
     <a href="/add" class="btn btn-primary" style={{marginTop:'15px' , width:'200px' ,margin:'10px',color:"white",borderRadius:'20px'}}><strong>back</strong></a>
     <a href="/guidereport" class="btn btn-primary" style={{marginTop:'15px' , width:'200px' ,margin:'10px',color:"white",borderRadius:'20px'}}><strong>Get Report</strong></a>
    
      </div>

     </div>

    ) 
 }

 }