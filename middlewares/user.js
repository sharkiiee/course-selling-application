const { User } = require("../db/db");




function userMiddleware(req,res,next)
{
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({
        username,
        password
    })
    .then((value)=>{
        if(!value){
            return res.status(403).json({
                message: "This admin doesn't exist"
            })
        }
        else next();
    })
}

module.exports = userMiddleware;