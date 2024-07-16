const { Router } = require("express");
const router = Router();

const { User, Course } = require("../db/db");
const userMiddleware = require("../middlewares/user");

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    //check if the user with this username already exist.

    const isValue = await User.findOne({
        username
    });
    if(isValue){
            return res.status(409).json({
                message: "User already exist"
            })
        }


    // Create new user in the database.

    try {
        await User.create({
            username,
            password
        })
        return res.json({
            message:'User created succesfully'
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something is up with the server"
        })
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logicconst ALL_COURSES = await Course.find({});
    const ALL_COURSES = await Course.find({});
    res.json({
        Courses:ALL_COURSES
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username:username
    },{
        $push : {purchasedCourses: courseId}
    })

    res.json({
        message:"Purchase Complete"
    })
    
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });

    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    })

    res.json({
        Courses: courses
    })
});

module.exports = router