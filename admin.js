const {Router} = require("express");
const {adminModel}= require("./db");
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("./config")

const adminRouter = Router();

adminRouter.post("/signup",async function(req,res){
    const{ email, password, firstName, lastName}= req.body; // todo: adding zod validation
    // TODO: hash the passeord so plaintext pw is not storedin the db

    //TODO: put inside a try cathch block
    await adminModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })
    
    
    res.json({
        message: "signup succeeded"
    })

})

adminRouter.post("/signin", async function(req,res){
    const {email, password}= req.body;

    const admin = await adminModel.findOne({
        email:email,
        password:password
    });

    if ( admin){
       const token = jwt.sign({
        id:admin._id
       }, JWT_ADMIN_PASSWORD);

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

adminRouter.post("/course",function(req,res){
    res.json({
        message: "purchase endpoint"
    })

})

adminRouter.put("/course",function(req,res){
    res.json({
        message: "purchase endpoint"
    })

})

adminRouter.get("/course/bulk",function(req,res){
    res.json({
        message: "purchase endpoint"
    })

})

module.exports = {
    adminRouter: adminRouter
}