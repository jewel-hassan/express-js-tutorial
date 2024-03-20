const express = require("express");
const router =express.Router();


router.get("/register",(req,res)=>{
    res.send("I am new register devoloper")
})
router.get("/login",(req,res)=>{
    res.send("I am new login devoloper")
})

module.exports=router;