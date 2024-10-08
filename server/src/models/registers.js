const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    pic:{
        type:String
    },
    mName:{
        type:String
    },
    fName:{
        type:String
    },
    dob:{
        type:String
    },
    gender:{
        type:String
    },
    phone:{
        type:Number
    },
    aadhar:{
        type:Number
    },
    locality:{
        type:String
    },
    address:{
        type:String
    },
    house:{
        type:Number
    },
    district:{
        type:String
    },
    pincode:{
        type:Number
    },
    state:{
        type:String
    },
    country:{
        type:String
    },
    nameferm:{
        type:String
    },
    role:{
        type:String
    },
    Scheme:{
        type:Array
    },
    education:{
        type:String
    },
    agelimit:{
        type:Number
    },
    skills:{
        type:String
    },
    lastdate:{
        type:String
    },
    adminphone:{
        type:Number
    },
    location:{
        type:String
    },
    salary:{
        type:Number
    },
    aboutus:{
        type:String
    },
    admin:{
        type:String
    },
    client:{
        type:String
    },
    mark:{
        type:Boolean,
    },
    college:{
        type:String,
    },
    regNo:{
        type:Number
    },
    branch:{
        type:String
    },
    course:{
        type:String
    },
    percent:{
        type:Number
    },
    year:{
        type:String
    }
})

const Register = new mongoose.model("Value",employeeSchema);

module.exports = Register; 