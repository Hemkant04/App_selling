const {Router} = require("express");
const {userModel}= require("./db");
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD}= require("./config")


const userRouter = Router();



userRouter.post("/signup",async function(req,res){
    const{ email, password, firstName, lastName}= req.body; // todo: adding zod validation
    // TODO: hash the passeord so plaintext pw is not storedin the db

    //TODO: put inside a try cathch block
    await userModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })
    
    
    res.json({
        message: "signup succeeded"
    })

})

userRouter.post("/signin", async function(req,res){
    const {email, password}= req.body;

    const user = await userModel.findOne({
        email:email,
        password:password
    });

    if ( user){
       const token = jwt.sign({
        id:user._id
       }, JWT_USER_PASSWORD);

       // Do cookie logic 
       res.json({
        token: token
       })
    } else{
        res.status(403).json({
            message:"Incorrect credential"
        })
    }

})

userRouter.post("/purchases",function(req,res){
    res.json({
        message: "purchase endpoint"
    })

})

module.exports = {
    userRouter: userRouter
}