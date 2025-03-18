import express from "express"
import { admin, Local, Manager } from "../controller/auth.controller.js"
import verifyToken from "../middleware/auth.middleware.js"
import checkRole from "../middleware/role.middleware.js"

const auth = express.Router()

//Only Admin can visit 
auth.get("/admin",verifyToken,checkRole("admin"),admin)

//Only Manager and Admin can visit
auth.get("/manager",verifyToken,checkRole("admin","manager"),Manager)

//All user can visit 
auth.get("/user",verifyToken,checkRole("admin","manager","user"),Local)
export default auth