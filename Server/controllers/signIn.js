const User = require('../models/user')
const JWT = require('jsonwebtoken');
const { sign } = require('jsonwebtoken');
const signToken = (userId) =>{
    return JWT.sign({_id:userId}, process.env.JWT_SECRET)
}
exports.signinUser = async (req,res) => {
    const {email, password} = req.body;

  try{
    const user = await User.findOne({email});

    if(!user){
        return res.status(401).json({sucess:false , error:"User not Found, try again"})
    }

    const isMatch = user.compairPassword(password);
    if(!isMatch){
        return res.status(401).json({sucess:false, error:'Email/Password do not match'});

    }
    const token =signToken(user._id);
    res.cookie('auth_token', token,{
        httpOnly:true,
    })
    //if we dont use statues is will automatically give statues 200
    const {firstname,lastname,role} = user;
    res.json({sucess:true, user:{firstname,lastname,email,role}})
 }
    catch(error){
            res.status(500).json({sucesss:false , error:'error occor'})
    }

};
