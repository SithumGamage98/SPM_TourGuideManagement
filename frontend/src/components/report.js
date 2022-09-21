
import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
//import Package from "../../../TourPackage/BACKEND/models/Package";

export default class AllPacks2 extends Component {


    constructor(props) {

        super(props);

        this.state = {

            packages: []
        };

    }
    componentDidMount() {

        this.retrivePackages();
    }
    retrivePackages() {

        axios.get("http://localhost:8070/package/all").then(res => {

            if (res.data.success) {
                this.setState({

                    packages: res.data.existingPackages

                });

                console.log(this.state.packages)

            }


        })



    }
   
 
    repotGen=()=>{

         window.print();

    }




    render() {

        return (

            <div className="container" class="p-3 mb-2 bg-secondary text-white">

                <h1><center><strong>All Packages</strong></center></h1>
                <table class="table table-dark table-hover">
                    <thead>
                        <tr class="text-danger">
                            <th scope="col">Count</th>
                            <th scope="col">PackageName</th>
                            <th scope="col">PackageID</th>
                            <th scope="col">Destination</th>
                            <th scope="col">NumberofDays</th>
                            <th scope="col">NumberofPassengers</th>
                            <th scope="col">Hotel</th>
                            <th scope="col">Transport</th>
                            <th scope="col">TourGuide</th>
                            <th scope="col">TotalPrice(Rs)</th>
                           


                        </tr>
                    </thead>
                    <tbody>

                        {this.state.packages.map((packages, index) => (

                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{packages.name}</td>
                                <td>{packages.packId}</td>
                                <td>{packages.destination}</td>
                                <td>{packages.numofdays}</td>
                                <td>{packages.nopass}</td>
                                <td>{packages.hotel}</td>
                                <td>{packages.transport}</td>
                                <td>{packages.tourGuide}</td>
                                <td>{packages.totPrice}</td>


                            </tr>

                        ))}



                    </tbody>

            

                </table>

            <button onClick={this.repotGen}>Print</button>

            </div>



        )
    }

}