import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Details(){
    const [values,setValues] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:4000/show')
        .then(values =>{
            setValues(values.data);
        })
    .catch(error=>console.log(error));
    },[])

    return(
        <div>
             <div class="header">
                <img src={require("../Rozgaar.jpg")} />
            </div>
            <br/>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Services</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                            <Link class="nav-link" to="../Admin/applications">Applications</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="../Admin/createJob">Create Job</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="../Admin/details">User Details</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>

            <h3>Total Registered Users</h3>
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Age</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone No.</th>
                </tr>
                </thead>
                <tbody>
                {
                    values.map(value =>{
                        return <tr>
                        <td>{value.name}</td>
                        <td>{value.gender}</td>
                        <td>{value.age}</td>
                        <td>{value.email}</td> 
                        <td>{value.phone}</td> 
                        </tr> 
                    })   
                }
                </tbody>
            </table>
            <div class="footer">
                <br />
                <p>&copy; 2024 Designed, Developed and Hosted by National Informatics Center.</p>
                <br />
            </div>
        </div>
    )
}

export default Details;