const { Router } = require("express");
const jwt = require("jsonwebtoken")
const adminMiddleware = require("../middlewares/admin");
const { Admin, Course, User } = require("../db/db");
const {JWT_SECRET} = require("../config");
const { isValid } = require("zod");

const router = Router();

router.post('/signup',async function(req,res){
    // Implementing admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    //check if the user with this username already exist.

    const isValue = await Admin.findOne({
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

router.post("/signin",async function(req,res){
    // Implement user signin logic

    const username = req.body.username;
    const password = req.body.password;

    const isValidated = await Admin.findOne({
        username,
        password
    })

    if(!isValidated){
        return res.status(411).json({
            message: "Wrong email and password"
        })
    }

    const token = jwt.sign({
        username
    },JWT_SECRET);

    res.json({
        Token: token
    })
})

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});


router.get('/courses',adminMiddleware,async function(req,res){
    const ALL_COURSES = await Course.find({});

    res.json({
        Courses:ALL_COURSES
    })
})

module.exports = router;