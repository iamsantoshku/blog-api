// import express from "express"
import mongoose from "mongoose"

const connectdb = async(req, res)=>{
    try{
       await mongoose.connect("mongodb://localhost:27017/E-COMM").then(()=>{
            console.log("database connected")
        })
    }
    catch(error){
        console.log(error);
        res.json({success:false, msg:notconnectes})
    }

}
export {connectdb};