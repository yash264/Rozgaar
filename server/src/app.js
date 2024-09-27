const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const partials = require("express-partials");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");
const { sendMail } = require("./controller/sendMail");
require("./db/conn");
require("render");
const Register = require("./models/registers");
const port = process.env.PORT || 4000;

//const static_path = path.join(__dirname,"../public");
const views_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

const corsOptions ={
    origin: "https://rozgaar-rust.vercel.app/",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())

app.set("view engine","hbs");
app.set("views",views_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res)=>{
    res.render("index")
});

// to submit a job application
app.post("/jobSubmit",async(req,res)=>{
    try{
        const email = req.body.email;
        const nameferm = req.body.nameferm;
        const role = req.body.role;

        const useremail = await Register.findOne({email:email});
        const adminName = await Register.findOne({nameferm:nameferm, role:role});

        user = await Register.updateOne({_id:useremail._id},{$push:{Scheme:{nameferm:req.body.nameferm,role:req.body.role,location:req.body.joblocation,salary:req.body.salary,mark:true}}})

        admin = await Register.updateOne({_id:adminName._id},{$push:{Scheme:{name:req.body.name,gender:req.body.gender,email:req.body.email,phone:req.body.phone}}})

        res.status(201).json("congrats");
              
    }catch(error){
        console.log(error);
    }
})

// to register a person
app.post("/register",async(req,res)=>{
    try{
        const client = "client";
        const registerEmployee = new Register({
            client:client,
            name:req.body.name,
            gender:req.body.gender,
            email:req.body.email,
            password:req.body.password
        })
        const registered = await registerEmployee.save();
        const email = req.body.email;
        // to send mail to a person
        sendMail(email);
        res.status(201).json("congrats");
    }catch(error){
        res.status(400).send(error);
    }
})

// to login a person
app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    Register.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                const token = jwt.sign({email:user.email},"jwt-secret-key",{expiresIn:'1d'});
                res.cookie("token",token);
                res.json("success")
            }
            else{
                res.json("incorrect password")
            }
        }
        else{
            res.json("please register")
        }
    }).catch(error=>console.log(error))
})

// to logout a person
app.get("/logout",(req,res)=>{
    res.clearCookie("token");
    return res.json({msg:"success"});
})

// to create a job
app.post("/createJob",async(req,res)=>{
    const admin = "admin";
    try{
        const registerEmployee = new Register({
            admin:admin,
            mark:false,
            nameferm:req.body.nameferm,
            role:req.body.role,
            education:req.body.education,
            agelimit:req.body.agelimit,
            skills:req.body.skills,
            lastdate:req.body.lastdate,
            email:req.body.email,
            adminphone:req.body.adminphone,
            location:req.body.location,
            salary:req.body.salary,
            aboutus:req.body.aboutus
        })
        const jobs = await registerEmployee.save();
        res.status(201).send("congrats");
            
    }catch(error){
        res.status(400).send(error);
    }
})

// to verify a person
const verifyUser = async(req,res,next)=>{
    const token = req.cookies.token;
    console.log(token);
    if(!token){
        return res.json("token was not available")
    }else{
        const isVerified = jwt.verify(token,"jwt-secret-key");
        const userData = await Register.findOne({email:isVerified.email}).select({password:0});
        req.body = userData;
        req.token = token;
        next();
    }
}

// to update a person profile
app.post("/update",async(req,res)=>{
    try{
        const email = req.body.email;
        const useremail = await Register.findOne({email:email});
        if(useremail.email==email){
            user = await Register.updateMany({email:useremail.email},{$set:req.body});
            res.status(201).json("congrats");
        }
        else{
            console.log("failed")
        }        
    }catch(error){
        console.log(error);
    }
})

// to upload a photo
app.post("/uploadPic",async(req,res)=>{
    const picName = req.body.image;
    const email = req.body.email;
    try{
        const imaged = await Register.updateOne({email:email},{$set:{pic:picName}});
        res.json("uploaded");
    }
    catch(error){
        res.json(error);
    }
})

// to fetch data to user profile
app.get("/dashboard",verifyUser, async (req,res)=>{
    try{
        const userData = req.body;
        console.log(userData +" userData");
        return res.status(200).json({userData});
    }catch(error){
        console.log(error);
    }
})

// to show user current available applications
app.get("/application",verifyUser,(req,res)=>{
    const email = req.body.email;
    const admin = "admin";
    Register.find({admin:admin,"Scheme.email":{$nin:[email]}})
    .then(values=>{ 
        res.json(values);
    }).catch(error=>res.json(error))
});

// to show user past application
app.get("/pastApplication",verifyUser,(req,res)=>{
    const email = req.body.email;
    const client = "client";
    Register.find({client:client,email:email,"Scheme.mark":true})
    .then(values=>{
        res.json(values);
    }).catch(error=>res.json(error))
});

// to display total applications
app.get("/totalApplication",(req,res)=>{
    const admin = "admin";
    Register.find({admin:admin})
    .then(values=>{
        res.json(values);
    }).catch(error=>res.json(error))
});

// to delete account
app.post("/delete",async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const values = await Register.findOne({email:email})
        if(values.password===password){
            console.log(values._id);
            deleteAccount = await Register.deleteOne({_id:values._id});
            console.log(deleteAccount);
            res.json("deleted");
        }else{
            console.log("error");
        }
    }catch(error){
        console.log(error);
    }
})

//  to delete a job
app.post("/deleteJob",async(req,res)=>{
    try{
        const nameferm = req.body.fermname;
        const role = req.body.fermrole;
        const values = await Register.findOne({nameferm:nameferm,role:role})
        if(values.nameferm===nameferm){
            console.log(values._id);
            deleteAccount = await Register.deleteOne({_id:values._id});
            console.log(deleteAccount);
            res.json("deleted");
        }else{
            console.log("error");
        }
    }catch(error){
        console.log(error);
    }
})

// to show total users
app.get("/show",(req,res)=>{
    const client = "client";
    Register.find({client:client})
    .then(values=>{
        res.json(values)
    }).catch(error=>res.json(error))
});

// to show details of a ferm
app.post("/criteria",(req,res)=>{
    const nameferm = req.body.fermname;
    const role = req.body.fermrole;
    Register.find({nameferm:nameferm, role:role})
    .then(values=>{
        res.json(values);
    }).catch(error=>res.json(error))
});

// to show the registed user details
app.post("/userDetails",(req,res)=>{
    const email = req.body.email;
    Register.find({email:email})
    .then(values=>{
        res.json(values);
    }).catch(error=>res.json(error))
});

app.listen(port,()=>{
    console.log(`server is runnig at ${port}`);
})
