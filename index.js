const express=require('express');
const mongoose =require('mongoose');
const Router =require('./Router');
const helmet=require('helmet');
const morgan=require('morgan');
const app=express();
require('dotenv').config();
mongoose.connect(process.env.URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(con=>{console.log("connnected")});
const cors=require('cors');
app.use(helmet());
app.use(morgan('dev'));
app.use(cors({origin:['http://localhost:5173']}));app.use(express.json());
app.use("/api/v1",Router)
app.listen(process.env.PORT,()=>{console.log(`Listening on port ${process.env.PORT}`);});