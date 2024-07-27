const mongoose = require("mongoose");
const DB = 'mongodb+srv://yp5094280:h6jEx0Brauuank3R@practise.btsrssx.mongodb.net/';

mongoose.connect(DB).then(()=>{
    console.log("success");
}).catch((e)=>{
    console.log("failed");
})