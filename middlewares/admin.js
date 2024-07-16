const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config.js")
const { Admin } = require("../db/db");

// check if the admin data is present in the database

async function adminMiddleware(req, res, next) {
    // Implementing admin authentication logic
    // check if the token coming from headers is correct or not

    try {
        const token = req.headers.authorization;

        // split Bearer and token
        const words = token.split(" ");
        const jwtToken = words[1];
    
        const decodedValue = jwt.verify(jwtToken,JWT_SECRET);
        if(decodedValue.username)
        {
            next();
        } else {
            res.status(403).json({
                msg: "you are not authenticated"
            })
        }
    
    } catch (e) {
        return res.json({
            message: "Wrong headers"
        })
    }

}


module.exports = adminMiddleware;