import React from "react";
import Home from "./Home";
import About from "./About";
import Register from "./User/Register";
import Login from "./User/Login";
import AdminLogin from "./Admin/AdminLogin";
import Details from "./Admin/Details";
import Applications from "./Admin/Applications";
import CreateJob from "./Admin/CreateJob";
import UserDetails from "./Admin/UserDetails";
import Update from "./User/Update";
import Security from "./User/Security";
import Dashboard from "./User/Dashboard";
import JobForm from "./User/JobForm";
import FormInfo from "./Admin/FormInfo";
import Notification from "./User/Notification";
import PastApplication from "./User/PastApplication";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/User/register" element={<Register />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/User/login" element={<Login />}></Route>
        <Route path="/Admin/adminLogin" element={<AdminLogin />}></Route>
        <Route path="/User/update" element={<Update />}></Route>
        <Route path="/Admin/details" element={<Details />}></Route>
        <Route path="/Admin/applications" element={<Applications />}></Route>
        <Route path="/Admin/createJob" element={<CreateJob />}></Route>
        <Route path="/User/security" element={<Security />}></Route>
        <Route path="/Admin/formInfo" element={<FormInfo />}></Route>
        <Route path="/Admin/userDetails" element={<UserDetails />}></Route>
        <Route path="/User/dashboard" element={<Dashboard />}></Route>
        <Route path="/User/notification" element={<Notification />}></Route>
        <Route path="/User/jobForm" element={<JobForm />}></Route>
        <Route path="/User/pastApplication" element={<PastApplication />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

//https://www.freecodecamp.org/news/how-to-build-a-fullstack-authentication-system-with-react-express-mongodb-heroku-and-netlify/