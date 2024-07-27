import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link,useLocation } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function FormInfo(){
    const location = useLocation()
    const fermname = location.state.fermname;
    const fermrole = location.state.fermrole;

    const [values,setValues] = useState([]) 
    axios.defaults.withCredentials = true;
    useEffect(()=>{
        axios.post('http://localhost:4000/criteria',{fermname,fermrole})
        .then(values => {
            setValues(values.data[0].Scheme)
        })
        .catch(error => console.log(error))
    }, [])

    const navigate = useNavigate()
    const info=(email)=>{
        navigate("../Admin/userDetails",{state:{email:email}})
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
            <h4>FormInfo</h4>
            <h3>{location.state.fermname}</h3>
            <table class="table">
                <thead>
                <tr>
                    <th>Name </th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                    {
                        values.map(value=>{
                            return <tr>
                            <td>{value.name}</td>
                            <td>{value.gender}</td>
                            <td>{value.email}</td>
                            <td>{value.phone}</td>
                            <button class="btn btn-outline-primary" onClick={()=>info(value.email)} >click here</button>
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

export default FormInfo;