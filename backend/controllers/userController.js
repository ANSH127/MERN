const User=require('../models/userModel')
const jwt=require('jsonwebtoken')


const createToken=(_id)=>{
    return jwt.sign({_id},process.env.SECRET_KEY,{expiresIn:'3d'})
}



// login user



const loginUser=async(req,res)=>{
    res.json({message:"login user"})
}

// signup user

const signupUser=async(req,res)=>{

    const {email,password}=req.body
    try{
        const user=await User.signup(email,password)
        const token=createToken(user._id)
        res.status(201).json({email,token})
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

module.exports={loginUser,signupUser}