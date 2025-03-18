import mongoose, { model } from "mongoose";

const UserSchema =  new mongoose.Schema({
    user:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type: String,
        enum:["admin","manager","user"]
    },
    
},
{
    timestamps:true
})

const UserModel = mongoose.model("UserModel",UserSchema)

export default UserModel