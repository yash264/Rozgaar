import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "./Rozgaar.jpg";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Home() {
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate("../User/register")
    }
    return (
        <div>
            <div class="header">
                <img src={require("./Rozgaar.jpg")} />
            </div>
            <h6 style={{padding:"6px"}}>Unlock Your Potential with Rozgaar.in - Your Gateway to Endless Career Opportunities!!</h6>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Services</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to="../User/register">User</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="../Admin/adminLogin">Admin</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="../about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                        <img src={require("./Rozgaar.jpg")} class="corousel" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={require("./jobPic1.jpg")} class="corousel" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={require("./jobPic2.jpg")} class="corousel" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={require("./jobPic3.jpg")} class="corousel" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <br/>
            <h5>Rozgaar drives economic growth, empowers individuals, strengthens communities, fosters innovation, and supports environmental sustainability. </h5>
            <br/>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://st5.depositphotos.com/1420268/64826/v/450/depositphotos_648262076-stock-illustration-businessman-holding-magnifying-glass-finding.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Job Creation</h5>
                            <p class="card-text">Empowering Futures Through Job Creation. Creating Opportunities, Building Futures that Empowers a Communities through Job Creation.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://hitechanimation.wordpress.com/wp-content/uploads/2017/11/recruitment.jpg?w=734&h=449" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Work Environment</h5>
                            <p class="card-text">Empowering Excellence where Innovation Meets Collaboration. Fostering Growth and Innovation where a Supportive Work Environment Nurtures Talent and Fuels Success.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://media.istockphoto.com/id/1158378842/vector/banner-successful-launch-new-idea-cartoon-flat.jpg?s=612x612&w=0&k=20&c=OEV8jzQdInJVNrxihDVdtboO4afwgOMim6Cl_kaUi7U=" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Better Carrer</h5>
                            <p class="card-text">Unlock Your Potential by Paving the Path to a Brighter Future. Chart Your Path to Success by Unlocking Your Potential for a Brighter, Better Career</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />

            <button type="button" class="btn btn-outline-success" onClick={handleSubmit} >Get Started</button>
            <br /><br />

            <div class="footer">
                <br />
                <p>&copy; 2024 Designed, Developed and Hosted by National Informatics Center.</p>
                <br />
            </div>
        </div>
    )
}

export default Home;