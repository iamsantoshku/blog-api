import { blogModel } from "../model/blogmodel.js";

const getblog = async(req, res)=>{
    try{
        const extisblog = await blogModel.find();
        if(!extisblog){
            return res.json({msg:"blog not found"})
        }
        return res.json({extisblog})

    }catch(err){
        console.log(err);
    }

}

const createblog = async(req, res)=>{
    const {title, discription, image, user} = req.body;
    try{
        const extisblog = await blogModel.findOne({title});
        if(extisblog){
            res.json({msg:"blog alreasy present"});
        }
        const blog = new blogModel({
            title,
            discription,
            image,
            user
        })
        await blog.save();
        return res.json({mag:"blog created"});

    }catch(err){
        console.log(err)

    }

}

const updateblog = async(req, res)=>{
    const {title, discription} = req.body;
    const blogId = req.params.id;
    try{
        const blog = await blogModel.findByIdAndUpdate(blogId,{
            title,
            discription
        })
        if(!blog){
            return res.json({msg:"blog not found"})
        }

        return res.json({msg:"blog updted"})
        

    }
    catch(err){
        console.log(err);

    }

}

const deleteblog = async(req, res)=>{
    const blogId = req.params.id;
    try{
        const user = await blogModel.findByIdAndDelete(blogId);
        if(!user){
            return res.json({msg:"user not found with this id"})
        }
        return res.json({msg:"blog deleted"});

    }
    catch(err){
        console.log(err);
        return res.status(500).json({ msg: "An error occurred while deleting the blog", error: err.message });

    }

}

export {getblog, createblog, updateblog, deleteblog}