const express = require('express');
const router=express.Router();
const User=require('../models/user')





router.post('/signin' , (req , res)=>{


})


router.post('/signup' , (req , res)=>{
    User.findOne({email :req.body.email})
    .exec((error  , user)=>{
        if(user)
        return res.status(400).json({
            message:"User already registered"
        });
        const {firstname , lastname , email ,password} =req.body
        const _user= new User({
            firstname,
            lastname,
            email,
            password,
            username:Math.random().toString()
        });
        _user.save((error ,data)=>{
            if(error){
                return res.status(400).json({
                    message:'Something went Wrong'
                })
            };
            if(data){
                return res.status(201).json({
                    message:"User created Suucessfully";
                })
            }
        })
    })
    

})

module.exports=router;