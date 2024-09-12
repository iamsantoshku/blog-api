import { userModel } from "../model/usermodel.js";
import bcrypt from "bcrypt"

const getuser = async(req, res)=>{
   
    try{
        const users = await userModel.find();
        if(!users){
          return res.json({msg:"user not found"});
        }
        return res.json(users);
    }
    catch(error){
        console.log("usernot found", error)

    }

}

const createuser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.json({ msg: "User already present" });
        }
        const saltRound = 10;
        const hashpassword = bcrypt.hashSync(password, saltRound);
        const user = new userModel({
            name,
            email,
            password:hashpassword,
            
        });

        await user.save();
        return res.json({ msg: "User created successfully" });
    } catch (err) {
        console.log("Error creating user", err);
        return res.status(500).json({ msg: "Server error" });
    }
};

const loginuser = async(req, res)=>{
    const {email, password} = req.body;
    try{
        const exitsuser = await userModel.findOne({email});
        if(!exitsuser){
            return res.json({msg:"user not found"})
        }
        const ispasswordcorrct = bcrypt.compareSync(password, exitsuser.password);
        if(!ispasswordcorrct){
           return res.json({msg:"this is not correct password"})
        }
        return res.json({msg:"login successfully"});
        
    }catch(err){
        console.log(err);

    }

}

export { getuser, createuser, loginuser };
