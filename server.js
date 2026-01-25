require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const {connectDB} = require("./mongoDb/connection")
const app = express();

app.use(express.json());

// connecting to the mongoDB(Database)
connectDB();




const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`App is running on the http://localhost:${PORT}`);
});