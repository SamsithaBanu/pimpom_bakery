const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();


const connectDB = require('./config/db');
const router = require('./routes/index')

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api",router);


const PORT = 8080;

if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get("*",(req, res)=>{
        res.sendFile(path.join(__dirname, "../frontend", "build","index.html"));
    })
}

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running ")
    })
})

