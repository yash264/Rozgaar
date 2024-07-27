import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function CreateJob(){
    const [nameferm,setNameFerm] = useState()
    const [role,setRole] = useState()
    const [education,setEducation] = useState()
    const [agelimit,setAgeLimit] = useState()
    const [skills,setSkills] = useState()
    const [lastdate,setLastDate] = useState()
    const [adminemail,setAdminEmail] = useState()
    const [adminphone,setAdminPhone] = useState()
    const [location,setLocation] = useState()
    const [salary,setSalary] = useState()
    const [aboutus,setAboutUs] = useState()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:4000/createJob',{nameferm,role,education,agelimit,skills,lastdate,adminemail,adminphone,location,salary,aboutus})
        .then(result=>{
            toast.success("Job Created Succesfully");
        })
        .catch(error=>console.log(error))
    }

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
            <h2>Create Job</h2>
            <form class="row g-3" onSubmit={handleSubmit}>
                <div class="col-md-6">
                    <label for="inputName" class="form-label">Name of the Ferm/Company</label>
                    <input type="text" class="form-control" id="inputName" name="nameferm" onChange={(e)=>setNameFerm(e.target.value)} required={true}/>
                </div>
                <div class="col-md-6">
                    <label for="inputRole" class="form-label">Role</label>
                    <input type="text" class="form-control" id="inputRole" name="role" onChange={(e)=>setRole(e.target.value)} required={true}/>
                </div>
                <div  class="input-group">
                    <span class="input-group-text">Eligibility</span>
                    <input type="text" aria-label="First name" class="form-control" placeholder="Educational Qualification" name="education" onChange={(e)=>setEducation(e.target.value)} required={true}/>
                    <input type="number" aria-label="Last name" class="form-control" placeholder="Age Limit" name="agelimit" onChange={(e)=>setAgeLimit(e.target.value)} required={true}/>
                </div>
                <div class="col-md-6">
                    <label for="inputSkills" class="form-label">Skills Needed</label>
                    <input type="text" class="form-control" id="inputSkills" name="skills" onChange={(e)=>setSkills(e.target.value)} required={true}/>
                </div>
                <div class="col-md-6">
                    <label for="inputDate" class="form-label">Last Date to Apply</label>
                    <input type="date" class="form-control" id="inputDate" name="lastdate" onChange={(e)=>setLastDate(e.target.value)} required={true}/>
                </div>
                <div class="col-md-6">
                    <label for="inputName" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputName" name="adminemail" onChange={(e)=>setAdminEmail(e.target.value)} required={true}/>
                </div>
                <div class="col-md-6">
                    <label for="inputphone" class="form-label">Phone No.</label>
                    <input type="number" class="form-control" id="inputphone" name="adminphone" onChange={(e)=>setAdminPhone(e.target.value)} required={true}/>
                </div>
                <div class="col-md-6">
                    <label for="inputLocation" class="form-label">Location</label>
                    <input type="text" class="form-control" id="inputLocation" name="location" onChange={(e)=>setLocation(e.target.value)} required={true}/>
                </div>
                <div class="col-md-6">
                    <label for="inputSalary" class="form-label">Salary (in Rupees)</label>
                    <input type="number" class="form-control" id="inputSalary" name="salary" onChange={(e)=>setSalary(e.target.value)} required={true}/>
                </div>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Please give some job descriptions" id="floatingTextarea2" style={{height : "100px"}} name="aboutus" onChange={(e)=>setAboutUs(e.target.value)}></textarea>
                    <label for="floatingTextarea">Brief Intro about Job</label>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-outline-success">Create Job</button>
                </div>
                <ToastContainer/>
            </form>
            <div class="footer">
                <br />
                <p>&copy; 2024 Designed, Developed and Hosted by National Informatics Center.</p>
                <br />
            </div>
        </div>
    )
}

export default CreateJob;