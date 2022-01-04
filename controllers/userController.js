const ErrorHandler = require('../utils/errorhandler')
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const logger = require('../utils/logger');
const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto')

// REGISTER A USER
exports.registerUser = catchAsyncErrors(async (req,res,next) => {
    const user = await User.create(req.body);
    sendToken(user,201,res)
});

// LOGIN USER

exports.loginUser = catchAsyncErrors(async (req,res,next) => {
    const {email,password} = req.body;

    // CHECK IF USER HAS PROVIDED BOTH EMAIL & PASSWORD
    if(!email || !password){
        logger.error(`Email or password not entered`);
        return next(new ErrorHandler("Please enter email & passowrd",400));
    }

    // FIND THE USER AND SELECT PASSWORD FIELD AS WEEL
    const user = await User.findOne({email}).select('+password');
    if(!user){
        logger.error(`User not found`);
        return next(new ErrorHandler("Invalid email or Password",401));
    }

    // CHECKING BOOLEAN FOR THE COMPARE PASSWORD METHOD
    const isPasswordMatched = await user.comparePassword(password);


    if(!isPasswordMatched){
        logger.error(`Incorrect password entered`);
        return next(new ErrorHandler("Invalid email or password",401));
    }
    sendToken(user,200,res)
});


// LOGOUT USER
exports.logoutUser = catchAsyncErrors(async (req,res,next) => {
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true
    });
    res.status(200).json({
        success:true,
        message:"Logged out successfully"
    });
});


// FORG0T PASSWORD
exports.forgotPassword = catchAsyncErrors(async(req,res,next) => {
    const user = await User.findOne({email:req.body.email});
    if(!user){
        return next(new ErrorHandler("User not found",404));
    }

    // GET RESET PASSWORD TOKEN
    const resetToken = user.getResetPasswordToken();  
    await user.save({validateBeforeSave:false});


    const resetPasswordUrl = `${process.env.FRONTEND_URL}/api/v1/password/reset/${resetToken}`;

    const message = `Your passsword reset token is :-\n\n ${resetPasswordUrl}
    \n\nIf you have not requested this email then,please ignore it
    `;
    try {
        await sendEmail ({
            email:user.email,
            subject:`GPTW Marketplace Password Recovery`,
            message,
        });
        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email} successfully`,
        });
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({validateBeforeSave:false});
        logger.error(error.message)
        return next(new ErrorHandler(error.message,500))
    }


})


// RESET PASSWORD

exports.resetPassword = catchAsyncErrors(async (req,res,next) => {


    // CREATING TOKEN HASH
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{$gt:Date.now()},
    });

    if(!user){
        return next(new ErrorHandler("Reset password token is not valid or has expired",400));
    }

    if(req.body.password !== req.body.confirmedPassword){
        return next(new ErrorHandler("Password does not match",400));
    }
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user,200,res);
});


// GET USER DETAILS
exports.getUserDetails = catchAsyncErrors(async (req,res,next) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({
        success:true,
        user,
    });
});


// UPDATE USER PASSWORD
exports.updatePassword = catchAsyncErrors(async (req,res,next) => {
    const user = await User.findById(req.user.id).select("+password")
    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
    if(!isPasswordMatched){
        logger.error(`Old password is incorrect`);
        return next(new ErrorHandler("Old password is incorrect",400));
    }

    if(req.body.newPassword !== req.body.confirmPassword){
        logger.error(`Old password is incorrect`);
        return next(new ErrorHandler("Password does not match",400));
    }

    user.password = req.body.newPassword;
    await user.save()
    sendToken(user,200,res)
});


// UPDATE USER PROFILE
exports.updateUserProfile = catchAsyncErrors(async (req,res,next) => {
    const updatedUser = {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        phone:req.body.phone,
    };
    const user = await User.findByIdAndUpdate(req.user.id,updatedUser,{
        new:true,
        runValidators:true,
        useFindAndModify:false,
    });
    res.status(200).json({
        success:true,
    });
});


// GET ALL USERS(ADMIN)
exports.getAllUser = catchAsyncErrors(async (req,res,next) => {
    const users = await User.find();
    res.status(200).json({
        success:true,
        users,
    });
});


// GET SINGLE USER (ADMIN)
exports.getSingleUser = catchAsyncErrors(async (req,res,next) => {
    const user = await User.findById(req.params.id);
    if(!user){
        return next(
            new ErrorHandler("User does not exist",400)
        );
    }
    res.status(200).json({
        success:true,
        user,
    });
});

// GET ALL USERS(ADMIN)
exports.getAllUser = catchAsyncErrors(async (req,res,next) => {
    const users = await User.find();
    res.status(200).json({
        success:true,
        users,
    });
});


// UPDATE USER ROLE(ADMIN)
exports.updateUserRole = catchAsyncErrors(async (req,res,next) => {
    const updatedUser = {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        phone:req.body.phone,
        isAdmin:req.body.isAdmin
    };
    const user = await User.findByIdAndUpdate(req.params.id,updatedUser,{
        new:true,
        runValidators:true,
        useFindAndModify:false,
    });
    res.status(200).json({
        success:true,
    });
});


// DELETE USERS(ADMIN)
exports.deleteUser = catchAsyncErrors(async (req,res,next) => {
    const user = await User.findById(req.params.id)
    if(!user){
        return next(new ErrorHandler('User does not exist',400));
    }

    await user.remove()
    res.status(200).json({
        success:true,
        message:"User deleted successfully"
    });
});