const docDB=require('../model/Doctor');
module.exports.getDoc=async(req,res)=>{
    const {category}=req.body;
    console.log(category);
    const doctors=await docDB.find({category});
    if(!doctors){
        return res.status(404).json({message:"NotFound"});
    }
    res.status(201).json(doctors);
};
module.exports.addDoc=async(req,res)=>{
    const {name,description,location,category,image,price}=req.body;
    //No validation because we want duplicated data
    const doctor=await docDB.create({name,description,location,category,price,image,reviews:[]});
    if(!doctor){
        return res.status(400).json({message:"SomethingWentWrong"});
    }
    res.status(201).json(doctor);
}