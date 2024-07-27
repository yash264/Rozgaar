import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";

function PastApplication(){
    const [values,setValues] = useState([])   
    axios.defaults.withCredentials = true;
    useEffect(()=>{
        axios.get('http://localhost:4000/pastApplication')
        .then(values => {
            setValues(values.data[0].Scheme);
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
            <h2>Past Application</h2>
            <table class="table">
            <thead>
                <tr>
                    <th>Name of the Company</th>
                    <th>Role</th>
                    <th>Salary</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {
                    values.map(value=>{
                        return <tr>
                            <td>{value.nameferm}</td>
                            <td>{value.role}</td>
                            <td>{value.salary}</td>
                            <td>{value.location}</td>
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

export default PastApplication;