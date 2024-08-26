import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Applications(){
    const [values,setValues] = useState([])   
    axios.defaults.withCredentials = true;
    useEffect(()=>{
        axios.get('https://rozgaar-server.vercel.app/totalApplication')
        .then(values => {
            setValues(values.data)
        })
        .catch(error => console.log(error))
    }, [])

    const deleteJob=(fermname,fermrole)=>{
        console.log(fermname);
        console.log(fermrole);
        axios.post('https://rozgaar-server.vercel.app/deleteJob',{fermname,fermrole})
        .then(values=>{
            console.log(values)
        })
        .catch(error=>console.log(error))
    }

    const navigate = useNavigate()
    const info=(fermname,fermrole)=>{
        //console.log(fermname);
        navigate("../Admin/formInfo",{state:{fermname:fermname,fermrole:fermrole}})
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
            <h3>Applications</h3>
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Name of the Scheme</th>
                    <th scope="col">Role</th>
                    <th scope="col">Skills</th>
                    <th scope="col">Location</th>
                    <th scope="col">Information</th>
                    <th scope="col">Operation</th>
                </tr>
                </thead>
                <tbody>
                {
                    values.map(value =>{
                        return <tr>
                        <td>{value.nameferm}</td>
                        <td>{value.role}</td>
                        <td>{value.skills}</td> 
                        <td>{value.location}</td>
                        <td><button class="btn btn-outline-secondary" onClick={()=>info(value.nameferm,value.role)} >click here</button></td>
                        <td><button class="btn btn-outline-danger" onClick={()=>deleteJob(value.nameferm,value.role)} >Delete</button> </td>
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

export default Applications;
