const express=require('express');
const {getDoc,addDoc} =require('./Controller/Doc')
const Router=express.Router();
Router.route("/doctors").post(getDoc);
Router.route("/addDoc").post(addDoc);
module.exports=Router;