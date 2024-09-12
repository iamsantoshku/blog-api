import express from "express"
import { getblog , createblog, updateblog, deleteblog} from "../controller/blogcontroller.js"

const blogRoute = express.Router();

blogRoute.get('/', getblog);
blogRoute.post('/add', createblog);
blogRoute.put('/update/:id', updateblog)
blogRoute.delete('/delete/:id', deleteblog)

export {blogRoute}