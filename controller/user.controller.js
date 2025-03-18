//Importing Model
import UserModel from "../model/user.model.js";

import jwt from "jsonwebtoken";

import bcrypt from "bcryptjs";
import userModel from "../model/user.model.js";

//Register
export const Register = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const ExistsUser = await UserModel.findOne({
      user:username
    })
    // console.log(ExistsUser);
    

    if(ExistsUser){
      return res.status(500).json({message:`The user Already Exists`})
    }

    const newUser = new UserModel({
      user: username,
      password: hashedPassword,
      role: role,
    });

    await newUser.save();

    res.status(201).json({ message: `The user is registered ${newUser}` });
  } catch (err) {
    res.status(404).json({ message: `The User not registered ` });
  }
};

//Login
export const Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({
      user: username,
    });
    if (!user) {
      res
        .status(404)
        .json({ message: `username with ${username}is not found` });
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
      res.status(500).json({message:"Invalid Credentials "})
    }
    const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:"1h"})

    //Setting Cookie-Parser
    res.cookie('token',token,{httpOnly:true,secure:false})

    //Setting up Session
    req.session.user = {username:user.user,role:user.role}

    //Saving session
    req.session.save((err) => {
      if (err) {
        return res.status(500).json({ message: "Failed to save session" });
      }
      res.status(200).json({ token });
    });


  } catch (err) {
    res.status(500).json({message:"Something Went wrong"})
  }
};

export const Logout = (req,res) => {
  try {
    //removing Cookie
    res.clearCookie("token")
    
    //Ending Session
    req.session.destroy();
    res.status(200).json({message:"Successfully Logout"})
  } catch (err) {
    res.status(500).json({message:"Something Went wrong"})
  }
}

export const sessiondetails = (req,res) => {
  res.json({session:req.session.user || "no session"})
}
