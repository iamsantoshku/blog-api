import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    user:{
        // type:mongoose.Types.ObjectId,
        // ref:"Usermodel",
        type:String,
        required:true
    }
})

export const blogModel = mongoose.model("blog", blogSchema);