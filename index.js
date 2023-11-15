const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute =  require("./router/auth");
const userRoute = require("./router/user");


dotenv.config();
const mongoURI = process.env.MONGODB_URI;
const app = express();

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log("Connected to Mongo Successfully"))
.catch(error => handleError(error));

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//Routes
app.use("/v1/auth",authRoute);
app.use("/v1/user",userRoute);
app.listen(8000,()=>{
    console.log("server is running");
})
