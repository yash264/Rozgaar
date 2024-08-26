import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Dashboard(){
    const navigate = useNavigate()
    const logout=(e)=>{
        e.preventDefault();
        axios.get('https://rozgaar-server.vercel.app/logout')
        .then( res=>{
            if(res.data.msg==="success"){
                navigate("../User/login")
            }else{
                alert("error");
            }
        }).catch(error=>console.log(error));
    }

    const [values,setValues] = useState([])   
    axios.defaults.withCredentials = true;
    useEffect(()=>{
        axios.get('https://rozgaar-server.vercel.app/dashboard')
        .then(values => {
            setValues(values.data.userData)
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
                        <Link class="nav-link" to="../User/dashboard">Dashboard</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="../User/notification">Notification</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="../User/pastApplication">Past Application</Link>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Profile</a>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="../User/update">Update </Link></li>
                        <li><Link class="dropdown-item" to="../User/security">Delete </Link></li>
                    </ul>
                    </li>
                    </ul>
                </div>
            </div>
            </nav>
            
            <h2>Welcome</h2>
            <div className="image-container">
                <img src={values?.pic} height={130} width={70} />
            </div>
            <h4>Personal Details</h4>
            <table class="table">
                <thead>
                <tr>
                    <th>Name </th>
                    <td>{values?.name}</td>
                    <th>Gender</th>
                    <td>{values?.gender}</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Date of Birth</th>
                    <td>{values?.dob}</td>
                    <th>Age</th>
                    <td>{values?.age}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{values?.email}</td>
                    <th>Phone No.</th>
                    <td>{values?.phone}</td>
                </tr>
                <tr>
                    <th>Mother's Name</th>
                    <td>{values?.mName}</td>
                    <th>Father's Name</th>
                    <td>{values?.fName}</td>
                </tr>
                <tr>
                    <th>Aadhar No.</th>
                    <td>{values?.aadhar}</td>
                    <th>HomeTown</th>
                    <td>{values?.district}, {values?.state}</td>
                </tr>  
                </tbody>
            </table>

            <h4>Communication Details</h4>
            <table class="table"> 
                <thead>
                <tr>
                    <th>Address</th>
                    <td>{values?.address}, {values?.locality}, {values?.district}, {values?.state}, {values?.country}, {values?.pincode}</td>
                </tr>
                </thead>
            </table>

            <h4>Education Qualifications</h4>
            <table class="table"> 
                <thead>
                <tr>
                    <th>College Name </th>
                    <td>{values?.college}</td>
                    <th>Registration No.</th>
                    <td>{values?.regNo}</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Course offered</th>
                    <td>{values?.course}</td>
                    <th>Branch</th>
                    <td>{values?.branch}</td>
                </tr> 
                <tr>
                    <th>Percentage/CGPA</th>
                    <td>{values?.percent}</td>
                    <th>Expected passing year</th>
                    <td>{values?.year}</td>
                </tr>  
                </tbody>
            </table>
            <button type="button" class="btn btn-outline-danger" onClick={logout}>Logout</button>
            <br/><br/>
            <div class="footer">
                <br />
                <p>&copy; 2024 Designed, Developed and Hosted by National Informatics Center.</p>
                <br />
            </div>
        </div>
    )
}

export default Dashboard;
