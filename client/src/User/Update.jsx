import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Update(){
    const [name,setName] = useState()
    const [dob,setdob] = useState()
    const [email,setEmail] = useState()
    const [mName,setmName] = useState()
    const [gender,setGender] = useState()
    const [state,setState] = useState()
    const [country,setCountry] = useState()
    const [pic,setPic] = useState()
    const [fName,setfName] = useState()
    const [phone,setPhone] = useState()
    const [aadhar,setAadhar] = useState()
    const [house,setHouse] = useState()
    const [locality,setLocality] = useState()
    const [address,setAddress] = useState()
    const [district,setDistrict] = useState()
    const [pincode,setPincode] = useState()
    const [college,setCollege] = useState()
    const [regNo,setRegNo] = useState()
    const [course,setCourse] = useState()
    const [branch,setBranch] = useState()
    const [percent,setPercent] = useState()
    const [year,setYear] = useState()
       
    axios.defaults.withCredentials = true;

    function convertToBase64(e){
        console.log(e);
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=()=>{
            setPic(reader.result)
            const image = reader.result;
            axios.post('http://localhost:4000/uploadPic',{image,email})
            .then(values=>{
                toast.success("Uploaded Successfully");
            }).catch(error => console.log(error))
        }
        reader.onerror=error=>{
            console.log(error);
        }
    }

    const updateDetails=(e)=>{
        e.preventDefault()
        axios.post('https://rozgaar-server.vercel.app/update',{name,dob,gender,mName,fName,email,phone,aadhar,locality,address,district,house,state,pincode,country,college,regNo,course,branch,percent,year})
        .then(values => {
            toast.success("Updated Succesfully");
        })
        .catch(error => console.log(error))
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
            
            <h2>Update</h2>
            <br/>
            <form class="row g-3" onSubmit={updateDetails}>
                <h3>Personal Details</h3>
                <div class="col-md-6">
                    <label for="inputName" class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" id="inputName" onChange={(e)=>setName(e.target.value)} required={true} />
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">Gender</label>
                    <select id="inputState" class="form-select" onChange={(e)=>setGender(e.target.value)} name="gender" required={true}>
                        <option selected>Choose...</option>
                        <option name="gender" onChange={(e)=>setGender(e.target.value)}>Male</option>
                        <option name="gender" onChange={(e)=>setGender(e.target.value)}>Female</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="inputName" class="form-label">Mother's Name</label>
                    <input type="text" class="form-control" name="mName" id="inputName" onChange={(e)=>setmName(e.target.value)} required={true}/>
                </div>
                <div class="col-md-6">
                    <label for="inputName" class="form-label">Father's Name</label>
                    <input type="text" class="form-control" name="fName" id="inputName" onChange={(e)=>setfName(e.target.value)} required={true}/>
                </div>
                <div class="col-md-6">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" name="email" id="inputEmail" onChange={(e)=>setEmail(e.target.value)} required={true} /><span style={{color:"red"}}>* Required</span>
                </div>
                <div class="col-md-6">
                    <label for="inputPhone" class="form-label">Phone No.</label>
                    <input type="number" class="form-control" name="phone" id="inputPhone" onChange={(e)=>setPhone(e.target.value)} required={true}/>
                </div>
                <div class="col-md-6">
                    <label for="inputAadhar" class="form-label">Aadhar No.</label>
                    <input type="number" class="form-control" name="aadhar" id="inputAadhar" onChange={(e)=>setAadhar(e.target.value)} required={true}/>
                </div>
                <div class="col-md-6">
                    <label for="inputdob" class="form-label">Date of Birth</label>
                    <input type="date" class="form-control" name="dob" id="inputdob" onChange={(e)=>setdob(e.target.value)} required={true}/>
                </div>
                <h3>Profile Photo</h3>
                <div class="col-md-8">
                    <label for="inputPic" class="form-label">Picture</label>
                    <input type="file" accept="image" class="form-control" name="pic" id="inputPic" onChange={convertToBase64} /><span style={{color:"red"}}>* Image size should be less than 50kb.</span>
                    <img src={pic} height={125} width={75} alt="Profile Pic" />
                    <ToastContainer/>
                </div>
                <h3>Communication Details</h3>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Street/Lane</label>
                    <input type="text" class="form-control" id="inputAddress" name="address" placeholder="Enter your Address" onChange={(e)=>setAddress(e.target.value)} required={true}/>
                </div>
                <div class="col-6">
                    <label for="inputAddress2" class="form-label">Locality</label>
                    <input type="text" class="form-control" id="inputAddress2" name="locality" placeholder="Enter locality" onChange={(e)=>setLocality(e.target.value)} required={true}/>
                </div>
                <div class="col-md-4">
                    <label for="inputHouse" class="form-label">House No.</label>
                    <input type="number" class="form-control" name="house" id="inputHouse" onChange={(e)=>setHouse(e.target.value)} required={true}/>
                </div>
                <div class="col-6">
                    <label for="inputDistrict" class="form-label">District</label>
                    <input type="text" class="form-control" name="district" id="inputDistrict" onChange={(e)=>setDistrict(e.target.value)} required={true}/>
                </div>
                <div class="col-md-4">
                    <label for="inputPin" class="form-label">Pin Code</label>
                    <input type="number" class="form-control" name="pincode" id="inputPin" onChange={(e)=>setPincode(e.target.value)} required={true}/>
                </div>
                <div class="col-md-5">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select" name="state" onChange={(e)=>setState(e.target.value)}>
                        <option selected>Choose...</option>
                        <option name="state" onChange={(e)=>setState(e.target.value)}>Uttar Pradesh</option>
                        <option  name="state" onChange={(e)=>setState(e.target.value)}>Madya Pradesh</option>
                        <option  name="state" onChange={(e)=>setState(e.target.value)}>Karnataka</option>
                        <option  name="state" onChange={(e)=>setState(e.target.value)}>Maharastra</option>
                        <option  name="state" onChange={(e)=>setState(e.target.value)}>New Delhi</option>
                        <option  name="state" onChange={(e)=>setState(e.target.value)}>Rajasthan</option>
                        <option  name="state" onChange={(e)=>setState(e.target.value)}>Bihar</option>
                    </select>
                </div>
                <div class="col-md-5">
                    <label for="inputState" class="form-label">Country</label>
                    <select id="inputState" class="form-select" name="state" onChange={(e)=>setCountry(e.target.value)}>
                        <option selected>Choose...</option>
                        <option  name="state" onChange={(e)=>setCountry(e.target.value)}>India</option>
                        <option  name="state" onChange={(e)=>setCountry(e.target.value)}>Others</option>
                    </select>
                </div>
                <h3>Educational Qualification</h3>
                <div class="col-md-6">
                    <label for="inputCollege" class="form-label">College Name</label>
                    <input type="text" class="form-control" name="college" id="inputCollege" onChange={(e)=>setCollege(e.target.value)} required={true}/>
                </div>
                <div class="col-md-6">
                    <label for="inputregNo" class="form-label">Registration No.</label>
                    <input type="number" class="form-control" name="registration" id="inputregNo" onChange={(e)=>setRegNo(e.target.value)} required={true}/>
                </div>
                <div class="col-md-6">
                    <label for="inputCourse" class="form-label">Course Offered</label>
                    <input type="text" class="form-control" name="course" id="inputCourse" onChange={(e)=>setCourse(e.target.value)} required={true}/>
                </div>
                <div class="col-md-6">
                    <label for="inputBranch" class="form-label">Branch</label>
                    <input type="text" class="form-control" name="branch" id="inputBranch" onChange={(e)=>setBranch(e.target.value)} required={true}/>
                </div>
                <div class="col-md-6">
                    <label for="inputpercent" class="form-label">Percentage/CGPA</label>
                    <input type="double" class="form-control" name="percent" id="inputpercetn" onChange={(e)=>setPercent(e.target.value)} required={true}/>
                </div>
                <div class="col-md-6">
                    <label for="inputyear" class="form-label">Expected year of Passing</label>
                    <input type="date" class="form-control" name="year" id="inputyear" onChange={(e)=>setYear(e.target.value)} required={true}/>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary" >Update</button>
                </div>
                <ToastContainer/>
            </form>
            <br/>
            <div class="footer">
                <br />
                <p>&copy; 2024 Designed, Developed and Hosted by National Informatics Center.</p>
                <br />
            </div>
        </div>
    )
}

export default Update;
