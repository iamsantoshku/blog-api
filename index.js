import express from "express";
import { connectdb } from "./config/db.js";
// import cores from "cores";
import { userRouter } from "./route/userroute.js";
import { blogRoute } from "./route/blogroute.js";

const app = express();
app.use(express.json());
// app.use(cores());

const port = process.env.PORT || 5000

connectdb();

app.get("/get", (req, res)=>{
    res.send("hello ")
})

app.use("/api", userRouter);
app.use('/api/blog', blogRoute);

app.listen(port, ()=>{
    console.log(`app is running on ${5000}`);

})
