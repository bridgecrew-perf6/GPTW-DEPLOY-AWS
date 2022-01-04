const ErrorHandler = require('../utils/errorhandler');
const logger = require('../utils/logger');

module.exports =(err,req,res,next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server error";

    // CAST ERROR MONGODB
    if(err.name === 'CastError'){
        const message = `Resource not found. Invalid:${err.path}`;
        logger.error(message)
        err = new ErrorHandler(message,400);
    }

    // MONGOOSE DUPLICATE KEY ERROR
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        logger.error(message)
        err = new ErrorHandler(message,400);
    }

    // WRONG JWT ERROR
    if(err.name === 'JsonWebTokenError'){
        const message = `JSON web Token is invlaid try again`;
        logger.error(message);
        err = new ErrorHandler(message,400);
    }

    // JWT EXPIRE
    if(err.name === 'TokenExpiredError'){
        const message = 'JSON web token is expired,Try again';
        logger.error(message);
        err = new ErrorHandler(message,400);
    }


    res.status(err.statusCode).json({
        success:false,
        error:err.message,
    });
};