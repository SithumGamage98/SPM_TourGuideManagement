
import React,{Component} from "react";
import Train from '../img/ella.jpg'
import Beach from '../img/2.jpg'
import segiri from '../img/3.jpg'
import Apura from '../img/5.jpg'
import galle from '../img/7.jpg'
import pp from '../img/polonnaruwa.jpeg'
import yala from '../img/yala.jpg'
import "../style_sheets/frontPage.css";


export default class sith extends Component{


 render(){

   return(
   <div >
   <div >

 <h1 class="header22"><strong><center>Travelo Tour Packages</center></strong></h1>
 <br></br><br></br>

  <img class="pic1" src={Train} height={400} width={700} />
  
    <div style={{position:'absolute',right:670,top:190,hight:200,width:400}}>
    <h4><a class="name"><strong>Package Ella</strong></a></h4>
      Destination - Ella, Badulla <br></br>
      Number of days - 3 Days<br></br>
      Number of passengers - 4<br></br>
      <p class="text-danger">Total Price - <strong> Rs.12500/=</strong></p>
         <a href="/search/destination" class="btn btn-warning">GET MORE</a><br></br> 
    <br></br>
    <a href="#" class="btn btn-success">GET PAYMENT</a>
      
   
      </div> 
 </div>


<div>
  <img class="pic2" src={Beach} height={400} width={700} ></img>
    <div  style={{position:'absolute',right:-60,top:190,hight:200,width:400}}> 
    <h4 ><a class="name"><strong>Ussangoda Night Camping</strong></a></h4>
     Destination - Ambalanthota,Ussangoda beach,Ranna,Tengalle<br></br>
      Number of days - 2 Days<br></br>
      Number of passengers - 8<br></br>
      <p class="text-danger">Total Price - <strong> Rs.16500/=</strong></p>
    <a href="/search/destination" class="btn btn-warning">GET MORE</a><br></br> 
    <br></br>
    <a href="#" class="btn btn-success">GET PAYMENT</a>
    
   </div>


</div>

<div>
<img class="pic3" src={segiri} height={400} width={700} ></img>
  <div >
  </div>
  <div  style={{position:'absolute',right:-60,top:510,hight:200,width:400}}>
  <h4 ><a class="name"><strong>Seegiri Travel PP2</strong></a></h4>
      Destination - Dambulla,Seegiriya <br></br>
      Number of days - 4 Days<br></br>
      Number of passengers - 5<br></br>
      <p class="text-danger">Total Price - <strong> Rs.12500/=</strong></p>
         <a href="/search/destination" class="btn btn-warning">GET MORE</a><br></br> 
    <br></br>
    <a href="#" class="btn btn-success">GET PAYMENT</a>
      
   
      </div>  
</div>





<div class="card">
<img class="pic4"  src={galle} height={400} width={700} ></img>
  <div >
  
  </div>
    <div style={{position:'absolute',right:670,top:320,hight:200,width:400}}>
     <h4 ><a class="name"><strong>Goo GaLLe!!</strong></a></h4>
     Destination - Galle City,Galle port,Jungle Beach,Unawatuna,Ambalangoda <br></br>
      Number of days - 4 Days<br></br>
      Number of passengers - 5<br></br>
      <p class="text-danger">Total Price - <strong> Rs.23700/=</strong></p>
    <a href="/search/destination" class="btn btn-warning">GET MORE</a><br></br> 
    <br></br>
    <a href="#" class="btn btn-success">GET PAYMENT</a>
    </div>

     


<div class="card">
<img class="pic5"  src={pp} height={400} width={700} ></img>
  <div >
  
  </div>
    <div style={{position:'absolute',right:670,top:660,hight:200,width:400}}>
     <h4 ><a class="name"><strong>Polonnaru wandana</strong></a></h4>
      Destination - Polonnaruwa,Abayagiriya<br></br>
      Number of days - 4 Days<br></br>
      Number of passengers - 5<br></br>
      <p class="text-danger">Total Price - <strong> Rs.46700/=</strong></p>
    <a href="/search/destination" class="btn btn-warning">GET MORE</a><br></br> 
    <br></br>
    <a href="#" class="btn btn-success">GET PAYMENT</a>
    </div>

  

  

</div>

<div class="card">
<img class="pic6"  src={yala} height={400} width={700} ></img>
  <div >
  
  </div>
    <div style={{position:'absolute',right:-60,top:660,hight:200,width:400}}>
     <h4 ><a class="name"><strong>Yala saffary FAM-7</strong></a></h4>
      Destination - Tissamaharama,Yala<br></br>
      Number of days - 3 Days<br></br>
      Number of passengers - 15<br></br>
      <p class="text-danger">Total Price - <strong> Rs.46700/=</strong></p>
    <a href="/search/destination" class="btn btn-warning">GET MORE</a><br></br> 
    <br></br>
    <a href="#" class="btn btn-success">GET PAYMENT</a>
    </div>

   
</div>

</div>


<div class="card-body6" style={{ position:"absolute", right:5,top:1200}}>
  <h5 class="text-dark"><center><strong>Travelo</strong></center></h5>
  <p class="text-white"><center>copyright @2020 Travelo All rights are reserved</center></p>
  </div>
  <div class="card-footer text-muted">
    
  </div>
</div>







   )



 }

}
