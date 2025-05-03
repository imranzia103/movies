import jwt from 'jsonwebtoken';

import User from '../models/User.js';

import asynchandler from "./asyncHandler.js";

//check if the useer is authiciated or nor?

const authenticate = asynchandler(async(req, res, next)  => {
   let token;
   
   
// Read JWT from the 'jwt' cookie


token = req.cookies.jwt

if (token) {
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.userId).select("-password");

        next();
        
    } catch (error) {
        res.status (401);
        throw new Error("Not authorized, token failed...");
    }

}else{
   
    
    res.status (401);
    throw new Error("Not authorized, token failed...");


}
    
});

//check if the usee is admin or not

const authorizeAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(403).send ( ' Not Authorized as an admin' );
    }
    
}
    

export { authenticate, authorizeAdmin };
