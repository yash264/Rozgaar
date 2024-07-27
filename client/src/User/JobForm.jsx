import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link,useLocation } from "react-router-dom";
import { Notification } from "../User/Notification";
import { ToastContainer,toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function JobForm(){
  const location = useLocation()
  const fermname = location.state.fermname;
  const fermrole = location.state.fermrole;

  const [values,setValues] = useState([]) 
  axios.defaults.withCredentials = true;
  useEffect(()=>{
      axios.post('http://localhost:4000/criteria',{fermname,fermrole})
      .then(values => {
        setValues(values.data[0])
      })
      .catch(error => console.log(error))
  }, [])

  const [result,setResult] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/dashboard')
    .then(result => {
        setResult(result.data.userData)
    })
    .catch(error => console.log(error))
  }, [])

  const name = result.name;
  const phone = result.phone;
  const gender = result.gender;
  const email = result.email;

  const nameferm = values.nameferm;
  const role = values.role;
  const joblocation = values.location;
  const salary = values.salary;

  const jobSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:4000/jobSubmit',{nameferm,role,salary,joblocation,name,phone,gender,email})
    .then(values=>{
      console.log(values);
    })
    .catch(error=> console.log(error))
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
                        <Link class="nav-link" to="../User/dashboard">Dashboard</Link>
                    </li>
                    </ul>
                </div>
            </div>
          </nav> 
          <h3>Form Introduction</h3> 

          <div class="card text-center">
            <div class="card-header">
                <h2>{location.state.fermname}</h2>
                <p>{values.aboutus}</p>
            </div>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                <th>Name of the Company</th>
                <td>{values.nameferm}</td>
                <th>Role</th>
                <td>{values.role}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Educational Qualification</th>
                <td>{values.education}</td>
                <th>Age Limit</th>
                <td>{values.agelimit}</td>
              </tr>
              <tr>
                <th>Skills</th>
                <td>{values.skills}</td>
                <th>Last Date to Apply</th>
                <td>{values.lastdate}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{values.email}</td>
                <th>Phone No.</th>
                <td>{values.adminphone}</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>{values.location}</td>
                <th>Salary</th>
                <td>{values.salary}</td>
              </tr>
              </tbody> 
            </table>
            </div>
          </div>
          <br/>

          <div class="card text-center">
            <div class="card-header">
                <h4>Verify your Details</h4>
            </div>
            <div class="card-body">
              <table class="table">
                <thead>
                <tr>
                    <th>Name </th>
                    <td>{result.name}</td>
                    <th>Gender</th>
                    <td>{result.gender}</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Date of Birth</th>
                    <td>{result.dob}</td>
                    <th>Email</th>
                    <td>{result.email}</td>
                </tr>
                </tbody> 
              </table>
            </div>
          </div>
          <br/>
          
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
            <label class="form-check-label" for="flexCheckIndeterminate">
              All the information that are given by me are true and correct according to me. I shall be debared from further rounds if any information is found to be false.
            </label>
          </div>
          <br/>

          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Register
          </button>

          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Conformation</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Are you sure want to Register ?
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-outline-primary" onClick={jobSubmit}>Register</button>
                  </div>
                  </div>
                </div>
              </div>
              <br/><br/>
              <div class="footer">
                <br />
                <p>&copy; 2024 Designed, Developed and Hosted by National Informatics Center.</p>
                <br />
            </div>

        </div>
    )
}

export default JobForm;