const errorhandler = require('../utils/errorhandler');
const catchAsyncErrors = require('./catchAsyncErrors');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorhandler');

exports.isAuthenticatedUser = catchAsyncErrors(async (req,res,next) => {
    // RETREIVING TOKEN FROM COOKIES
    const {token} = req.cookies

    // CHECKING IF TOKEN EXISTS
    if(!token){
        return next(new ErrorHandler("Please login to access this resource",401))
    }

    // DECODING TOKEN DATA
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    // QUERYING DATABASE FOR THE USER WITH SAME ID AS THE JWT DECODED ID 
    req.user = await User.findById(decodedData.id);
    next()
});


exports.isAdmin = (isAdmin) => {
    return (req,res,next) => {
        if(!req.user.isAdmin){
            return next(new ErrorHandler("You are not authorised to acces this resource",401))
        }
        next()
    };
};
