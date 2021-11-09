const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config()
const app = express();
app.use(cors());



const url = `mongodb://${process.env.Database_UserName} :${process.env.Database_Password}@cluster0-shard-00-00.l9s4l.mongodb.net:27017,cluster0-shard-00-01.l9s4l.mongodb.net:27017,cluster0-shard-00-02.l9s4l.mongodb.net:27017/bikePointDatabase?ssl=true&replicaSet=atlas-rb992z-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose.connect(url, ()=>{
console.log('connection successfull');
})














app.listen(5000, ()=>{
    console.log("Server running at 5000");
})