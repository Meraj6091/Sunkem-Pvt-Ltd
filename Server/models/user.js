//user mongoose
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userschema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20,
        trimp:true
    },

    lastname:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20,
        trimp:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trimp:true
    },
    //to hash the passcode install dependency bcrypt
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:20,
        trimp:true
    },
    role:{
        type:String,
        default:'user',
        enum:['user', 'admin'] //accept
    }
});

userschema.pre('save',function(next){
    if(!this.isModified('password')){
        return next();
    }
    else{
        bcrypt.hash(this.password,10,(err,hashedPassword) =>{
            if(err){
                return next(err);
            }
            this.password=hashedPassword;
            next();
        })
    }
});
userschema.methods.compairPassword=function(password){
    if(password){ //if there is any passcode
        return bcrypt.compare(password,this.password)
        //if the passcode is matched return true
    }

    return false ;
}

module.exports=mongoose.model('User',userschema);