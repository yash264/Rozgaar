import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Security(){
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/delete',{email,password})
        .then(result=>{
            toast.success("Account Deleted Successfully");
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

            <h3>Delete Account</h3>
            <div class="card-body">
                <form onSubmit={handleSubmit}>
                    <div class="row mb-3">
                        <label for="email" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" name="email" class="form-control" onChange={(e)=>setEmail(e.target.value)} required={true}/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="password" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" name="password" class="form-control" onChange={(e)=>setPassword(e.target.value)} required={true}/>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Delete</button>
                    <ToastContainer/>
                </form>
            </div><br/>
            <div class="footer">
                <br />
                <p>&copy; 2024 Designed, Developed and Hosted by National Informatics Center.</p>
                <br />
            </div>
    </div>
  )
}

export default Security;