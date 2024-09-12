import express from "express";
import { getuser, createuser, loginuser } from "../controller/usercontroller.js";

const userRouter = express.Router();

userRouter.get("/getuser", getuser);
userRouter.post("/create", createuser);
userRouter.post("/login", loginuser);

export {userRouter}