import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login(){
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/login',{email,password})
        .then(result=>{
            if(result.data==="success"){
                navigate("../User/dashboard")
            }else{
                toast.error("Invalid Crudentials")
            }
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
                        <Link class="nav-link" to="../">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="../User/register">Register</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="../User/login">Login</Link>
                    </li>
                    </ul>
                </div>
            </div>
            </nav>

            <br/>
            <div class="card text-center">
                <div class="card-header">
                    <h3>Login</h3>
                </div>
                <div class="card-body">
                <form onSubmit={handleSubmit}>
                    <div class="row mb-3">
                        <label for="email" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" name="email" class="form-control" onChange={(e)=>setEmail(e.target.value)} required={true} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="password" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" name="password" class="form-control" onChange={(e)=>setPassword(e.target.value)} required={true} />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                    <ToastContainer/>
                </form>
                </div>
            </div>
            <div class="footer">
                <br />
                <p>&copy; 2024 Designed, Developed and Hosted by National Informatics Center.</p>
                <br />
            </div>
        </div>
    )
}

export default Login;