import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function AdminLogin(){
    const navigate = useNavigate()
    const [values,setValues] = useState({
        password : '',
        cpassword : ''
    })

    function handleInput(e){
        const object = {...values,[e.target.name]:e.target.value}
        setValues(object)
    }

    const [errors,setErrors] = useState({})

    function handleValidation(e){
        e.preventDefault();
        setErrors(Validation(values))
        if(Object.keys(Validation(values)).length === 0){
            navigate("../Admin/applications");
        }
    }

    function Validation(values){
        const errors = {}
        if(values.password!='rozgaar'){
            errors.password="* Invalid Secret Key";
        }
        if(values.cpassword!='rozgaar'){
            errors.cpassword="* Conform Secret Key doesn't match";
        }
        return errors;
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
                    </ul>
                </div>
            </div>
            </nav>

            <br/>
            <div class="card text-center">
                <div class="card-header">
                    <h3>Admin Login</h3>
                </div>
                <div class="card-body">
                <form onSubmit={handleValidation}>
                    <div class="row mb-3">
                        <label for="email" class="col-sm-2 col-form-label">User Type</label>
                        <div class="col-sm-10">
                            <input type="text" name="type" class="form-control" value="Admin" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="password" class="col-sm-2 col-form-label">Secret Key</label>
                        <div class="col-sm-10">
                            <input type="password" name="password" class="form-control" onChange={handleInput} required={true}/>{errors.password && <span style={{color:"red"}}>{errors.password}</span>}
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="password" class="col-sm-2 col-form-label">Conform Secret Key</label>
                        <div class="col-sm-10">
                            <input type="password" name="cpassword" class="form-control" onChange={handleInput} required={true}/>{errors.cpassword && <span style={{color:"red"}}>{errors.cpassword}</span>}
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

export default AdminLogin;