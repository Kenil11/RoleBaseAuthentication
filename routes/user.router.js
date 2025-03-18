import express from "express"
import { Login, Logout, Register, sessiondetails } from "../controller/user.controller.js"

export const user = express.Router()


user.post("/register",Register)

user.post("/login",Login)

user.get("/logout",Logout)

user.get("/session",sessiondetails)