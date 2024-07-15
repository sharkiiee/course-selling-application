const { Router } = require("express");
const adminMiddleware = require("../middlewares/user");
const { Admin } = require("../db/db");

const router = Router();

router.post('/signup',async function(req,res){
    // Implementing admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    //check if the user with this username already exist.

    const isValue =await Admin.findOne({
        username
    });
    if(isValue){
            return res.status(409).json({
                message: "User already exist"
            })
        }


    // Create new user in the database.

    try {
        await Admin.create({
            username,
            password
        })
        return res.json({
            message:'Admin created succesfully'
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something is up with the server"
        })
    }
})

router.post('/courses',adminMiddleware,function(req,res){

})

router.get('/courses',adminMiddleware,function(req,res){

})

module.exports = router;