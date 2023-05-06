require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = async (req,res,next) => {
    try {
        const jwtToken = req.header("token");
        if(!jwtToken){
            return res.status(403).json("Not Authorized, Access denied");   
        }

        const payload = jwt.verify(jwtToken,process.env.jwtSecret);
        //Will return a payload if verified:

        req.user = payload.user;
        
        
    } catch (error) {
        console.error(error.message);
        return res.status(403).json("Not Authorized, Access denied");
    }
}