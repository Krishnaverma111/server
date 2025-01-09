const mongoose = require("mongoose")
const express= require('express')

const route = require("./Routes/route")


const app = express()

const port= 5000;
const url ="mongodb+srv://krishnaverma112131:gSw31wwKXPHXit0m@cluster0.r8e5b.mongodb.net/"

mongoose.connect(url)
.then(()=>{console.log(`mongo connected`);})
.catch((e)=>{console.log(e);})

app.use("/",route)

app.listen(port,()=>{console.log(`the app is running on this port = ${port}`);})

