const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute =  require("./router/auth");
const userRoute = require("./router/user");


dotenv.config();
mongoose.set('strictQuery', true);
const mongoURI = process.env.MONGODB_URI;
const app = express();

mongoose.connect(mongoURI,()=>{
    console.log("connect successfuly");
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//Routes
app.use("/v1/auth",authRoute);
app.use("/v1/user",userRoute);
app.listen(8000,()=>{
    console.log("server is running");
})
