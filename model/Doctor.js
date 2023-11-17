const mongoose=require('mongoose');
const docS=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Required Field"]
    },
    description:{
        type:String,
        required:[true,"Required Field"]
    },
    category:{
        type:String,
        required:[true,"Required Field"]
    },
    image:{
        type:String,
        required:[true,"Required Field"]
    },
    reviews:[
        {name:String,desc:String,Date:{type:Number,default:Date.now}}
    ],
    location:{
        type:String,required:[true,"Required Field"]
    },price:{type:Number,required:[true,"Required Field"]}
});
module.exports=mongoose.model("docDB",docS);