import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link,useLocation } from "react-router-dom";
import { Notification } from "../User/Notification";
import { ToastContainer,toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function UserDetails(){
    const location = useLocation()
    const email = location.state.email;
    const [values,setValues] = useState([]) 

    axios.defaults.withCredentials = true;
    useEffect(()=>{
        axios.post('http://localhost:4000/userDetails',{email})
        .then(values => {
            setValues(values.data[0])
        })
        .catch(error => console.log(error))
    }, [])
    
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
            <h4>User Details</h4>
            <div class="image-container">
                <img src={values.pic} height={130} width={70} />
            </div>
            <h3>Personal Details</h3>
            <table class="table">
                <thead>
                <tr>
                    <th>Name </th>
                    <td>{values.name}</td>
                    <th>Gender</th>
                    <td>{values.gender}</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Date of Birth</th>
                    <td>{values.dob}</td>
                    <th>Age</th>
                    <td>{values.age}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{values.email}</td>
                    <th>Phone No.</th>
                    <td>{values.phone}</td>
                </tr>
                <tr>
                    <th>Mother's Name</th>
                    <td>{values.mName}</td>
                    <th>Father's Name</th>
                    <td>{values.fName}</td>
                </tr>
                <tr>
                    <th>Aadhar No.</th>
                    <td>{values.aadhar}</td>
                    <th>HomeTown</th>
                    <td>{values.district}, {values.state}</td>
                </tr>  
                </tbody>
            </table>
            <h4>Communication Details</h4>
            <table class="table">
                <thead> 
                <tr>
                    <th>Address</th>
                    <td>{values.address}, {values.locality}, {values.district}, {values.state}, {values.country}, {values.pincode}</td>
                </tr>
                </thead>
            </table>

            <h4>Education Qualifications</h4>
            <table class="table"> 
                <thead>
                <tr>
                    <th>College Name </th>
                    <td>{values.college}</td>
                    <th>Registration No.</th>
                    <td>{values.regNo}</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Course offered</th>
                    <td>{values.course}</td>
                    <th>Branch</th>
                    <td>{values.branch}</td>
                </tr> 
                <tr>
                    <th>Percentage/CGPA</th>
                    <td>{values.percent}</td>
                    <th>Expected passing year</th>
                    <td>{values.year}</td>
                </tr>  
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

export default UserDetails;