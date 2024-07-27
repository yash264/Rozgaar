import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "./Rozgaar.jpg";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function About() {

    return (
        <div>
            <div class="header">
                <img src={require("./Rozgaar.jpg")} />
            </div>
            <br />
            <h6>Unlock Your Potential with Rozgaar.in - Your Gateway to Endless Career Opportunities!!</h6>
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
                                <Link class="nav-link" to="../User/register">User</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="../Admin/adminLogin">Admin</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="about">
                <p>Employment empowers people, enhances their self-esteem, and contributes to mental well-being. It fuels economic growth, reduces poverty, and fosters a sense of purpose among individuals. When new jobs are created, incomes rise, consumer spending increases, and businesses thrive, leading to a robust cycle of prosperity.</p>
                <h4>Features</h4>
                <p>1.	Build a dynamic web application facilitating real time form submission.<br />
                    2.	Developed a platform where admin can create a form.<br />
                    3.	Provides a dynamic feature where admin can see the total registered application.<br />
                    4.	Implement JWT token to ensure security and current logged in user data.<br />
                    5.	Designed a visual system to sent email upon successful registration.<br />
                    6.	Makes a option such user can also upload his profile photo within a certain range.<br />
                    7.	Created a feature that seperates the notification and past application.
                </p>
                <div class="row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Admin</h5>
                                <p class="card-text">1.	Admin can create a form by providing specified details.</p>
                                <p class="card-text"> 2.	Once job is created, admin can see the total applications for that form.</p>
                                <p class="card-text"> 3.	Admin can also see the total registered users for that website.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Job Seekers</h5>
                                <p class="card-text">1.	They can register as a fresh candidate and after that logged in.</p>
                                <p class="card-text">2.	After updating their profile, they are eligible to apply for the available notification.</p>
                                <p class="card-text">3.	Once they successfully applied for the company, form gets filtered as past application.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <h4>About Me</h4>
                <p>Myself Yash Pandey pursuing Bachelor's of Technology in National Intitute of Technology Allahabad, Prayagraj 2k26. I am from Gorakhpur, Uttar Pradesh.</p>
            </div>

            <h4 style={{ textAlign: "center" }} >Follow us on </h4>
            <section style={{ textAlign: "center" }}>
                <a href="https://www.linkedin.com/in/yashpandey02"><img src="https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png" alt="Linkedin" class="follow" /></a>
                <a href="https://www.instagram.com/yash_2k19_/"><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" class="follow" /></a>
            </section>

            <div class="footer">
                <br />
                <p>&copy; 2024 Designed, Developed and Hosted by National Informatics Center.</p>
                <br />
            </div>
        </div>
    )
}

export default About;