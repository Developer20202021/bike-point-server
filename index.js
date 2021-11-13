const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const AddProductRouter = require('./Routers/AddProductRouter');
const AdminAllRouter = require('./Routers/AdminRouter/AdminAll');
dotenv.config()
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const port = process.env.PORT||5000;



const url = `mongodb://${process.env.Database_UserName}:${process.env.Database_Password}@cluster0-shard-00-00.mgll3.mongodb.net:27017,cluster0-shard-00-01.mgll3.mongodb.net:27017,cluster0-shard-00-02.mgll3.mongodb.net:27017/bikePointDatabase?ssl=true&replicaSet=atlas-6onnuf-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose.connect(url, ()=>{
console.log('connection successfull');
})

// app.post('/public/product',(req,res)=>{

// })

app.use('/public',AddProductRouter);
app.use('/admin', AdminAllRouter);












app.listen(port, ()=>{
    console.log("Server running at 5000");
})