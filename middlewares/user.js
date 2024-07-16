const { User } = require("../db/db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

function userMiddleware(req,res,next)
{
// Implementing user authentication logic
    // check if the token coming from headers is correct or not

    const token = req.headers.authorization;

    // split Bearer and token
    const words = token.split(" ");
    const jwtToken = words[1];

    const decodedValue = jwt.verify(jwtToken,JWT_SECRET);
    if(decodedValue.username)
    {
        req.username = decodedValue.username;
        next();
    } else {
        res.status(403).json({
            msg: "you are not authenticated"
        })
    }

}

module.exports = userMiddleware;