const User=require('../models/userModel')
// login user

const loginUser=async(req,res)=>{
    res.json({message:"login user"})
}

// signup user

const signupUser=async(req,res)=>{

    const {email,password}=req.body
    try{
        const user=await User.signup(email,password)
        res.status(201).json({user})
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

module.exports={loginUser,signupUser}