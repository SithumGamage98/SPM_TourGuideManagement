import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
//import Package from "../../../TourPackage/BACKEND/models/Package";

export default class guidereport extends Component {


    constructor(props) {

        super(props);

        this.state = {

            tourguides: []
        };

    }
    componentDidMount() {

        this.retriveTourguides();
    }
    //retreive data
    retriveTourguides() {

        axios.get("http://localhost:8070/tourguide/all").then(res => {

            if (res.data.success) {
                this.setState({

                    tourguides: res.data.existingTourguides

                });

                console.log(this.state.tourguides)

            }


        })



    }
   
    //generate report
 
    repotGen=()=>{

         window.print();

    }




    render() {

        return (

            <div className="container" class="p-3 mb-2 bg-white text-black">

                <h2><center><strong> Tourguides Reports</strong></center></h2>
                <table class="table  table-hover"style={{marginTop:'40px'}}>
                    <thead>
                    <tr class="text-primary">
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

                        {this.state.tourguides.map((tourguides, index) => (

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

                            </tr>

                        ))}



                    </tbody>

            

                </table>

           
           
 < button type="button" class="btn btn-primary" style={{marginTop:'15px' , width:'200px' ,margin:'10px',color:"white",borderRadius:'20px'}}  onClick={this.repotGen}><strong>Print Report</strong></button>
 <a href="/view" class="btn btn-primary" style={{marginTop:'15px' , width:'200px' ,margin:'10px',color:"white",borderRadius:'20px'}}><strong>User View</strong></a>
            </div>



        )
    }

}