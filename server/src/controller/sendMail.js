const nodemailer = require("nodemailer");
require("dotenv").config();

const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "yp20222068@gmail.com",
      pass: "letwfgrgpvmyvcnw",
    },
});
  
const sendMail=(email)=>{
    console.log(email);
    const mailOptions = {
        from:{
            name: "Rozgaar",
            address: "yp20222068@gmail.com"
        },
        to:email,
        subject: "Regarding registration on Rozgaar ", 
        html: "<p>Thank you for registering on Rozgaar. Welcome to a New Adventure: Your First Step Towards Endless Possibilities Starts here !! </p><p> This is the platform where one can find his deserving jobs with decent salaries.</p><p>Hard Work beats Talent as present makes our future.</p>", 
        attachments:[{
            filename: "Rozgaar.jpg",
            path: "./src/Rozgaar.jpg",
        }],
    }
    transport.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log("Email sent");
        }
    })
}

module.exports = {sendMail};

  