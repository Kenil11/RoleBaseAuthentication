import express from "express"
import dotenv from "dotenv/config"
import cookieParser from "cookie-parser"
import auth from "./routes/auth.router.js"
import session from "express-session"
import { connectDB } from "./database/db.js"
import { user } from "./routes/user.router.js"

//Initializing Express
const app = express()

//Middleware
app.use(express.json())
app.use(cookieParser())
app.use(session({
    secret:process.env.JWT_SECRET,//This passes JWT_Token
    resave:false, //Only changes the session if changes are there
    saveUninitialized:false, //doesn't Create a session unless you create something
    cookie:{secure:false,maxAge: 24 * 60 * 60 * 1000} //Set to true with HTTPS
}))

//Connecting to DB 
connectDB()

//Routes
app.use("/api/auth",user)

app.use("/api/access",auth)

//Define Port
const port = process.env.PORT || 8080
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})