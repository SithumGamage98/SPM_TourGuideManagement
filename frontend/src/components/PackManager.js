import React, { Component } from "react";
import mana from '../img/boss.jpg'
import { Link, useNavigate, useParams } from "react-router-dom";
import "../style_sheets/Style.css";
import galle from '../img/Travelo.jpeg'



export default class manager extends Component {
  render() {



    return (

      <div>
       <div class="header2" style={{width:"1600px"}}> <h1 class="header"  style={{position:"inherit", top:"40px"}}><strong><center>Package Manager's Home Page</center></strong></h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
          <img class="logo"  src={galle} style={{ position:"absolute", right:1300,top:13}} height={50} width={200}  alt="Card image cap"></img>
          
          <Link to="#"><button class="btnBack2" type="button">Logout</button></Link>&nbsp;&nbsp;
          
       
        </div>
        <img src={mana} height={400} width={80} style={{
          position: 'absolute',
          right: 500,
          top: 235,
        }} alt="Card image cap" />

      <diV class="ManagerBody">
        <div class="mangerInfo">
        <div class="card text-dark bg-light mb-3" style={{ width: "300px", position: 'absolute', right: 200, top: 250,}}>
          <div class="card-header"> <b>Hello..Mr.Gamage</b></div>
          <div class="card-body1">
            <p class="card-text"><i>Your user name -</i> Man_Package23</p>
            <p class="card-text"><i>Your registration nubmer -</i>PP990</p>
            <p class="card-text"><i>Your login password -</i>Gama@Man34</p>
            

          </div>
        </div><br></br><br></br>
</div>
        <div  class="ManagerCard" style={{ width: '24rem' }}>
          <div class="card-body1">
            <h5  class="text-white card-title"><strong>Create new tour packages</strong></h5>
            <Link to="/add/package"><button class="ManLetsgoo" type="button"><i className="fa-solid fa-angles-right"></i>Lets go..</button></Link>&nbsp;&nbsp;
          </div>
        </div><br></br>

        <div class="ManagerCard"  style={{ width: '24rem' }}>
          <div class="card-body1">
            <h5 class="card-title" class="text-white"><strong>Manage package details</strong></h5>
            <Link to="/manage/AllPacks"><button class="ManLetsgoo" type="button"><i className="fa-solid fa-angles-right"></i>Lets go..</button></Link>&nbsp;&nbsp;
          </div>
        </div><br></br>

        <div class="ManagerCard"  style={{ width: '24rem' }}>
          <div class="card-body1">
            <h5 class="card-title" class="text-white"><strong>Customer created packages</strong></h5>
            <Link to="/all2"><button class="ManLetsgoo" type="button"><i className="fa-solid fa-angles-right"></i>Lets go..</button></Link>&nbsp;&nbsp;
          </div>
        </div>

        <br></br>

        <div class="ManagerCard"  style={{ width: '24rem' }}>
          <div class="card-body1">
            <h5 class="card-title" class="text-white"><strong>Feedbacks</strong></h5>
      
            <Link to="#"><button class="ManLetsgoo" type="button"><i className="fa-solid fa-angles-right"></i>Lets go..</button></Link>&nbsp;&nbsp;
          </div>
        </div>

        <br></br>

        <div class="ManagerCard"  style={{ width: '24rem' }}>
          <div class="card-body1">
            <h5 class="card-title" className="text-white"><strong>Generate reports</strong></h5>
          
                <Link to="/report"><button class="ManLetsgoo" type="button"><i className="fa-solid fa-angles-right"></i>Lets go..</button></Link>&nbsp;&nbsp;
          </div>
        </div>



</diV>

        
  <div class="card text-center">
  <div class="card-header">
  </div>
  <div class="card-body" style={{width:"1600px"}}>
    <h5 class="text-dark"><strong>Travelo</strong></h5>
    <p class="text-white">copyright @2020 Travelo All rights are reserved</p>
  </div>
  <div class="card-footer text-muted">
    
  </div>
</div>


      </div>

    )
  }

}