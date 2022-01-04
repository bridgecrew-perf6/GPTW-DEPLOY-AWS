const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,"Please enter a firstname"],
        trim:true,
        maxlength:[30,'Firstname cannot exceed 30 characters'],
        minlength:[4,'Firstname should be atleaset 4 characters']
    },
    lastname:{
        type:String,
        required:[true,"Please enter a lastname"],
        maxlength:[30,'Firstname cannot exceed 30 characters'],
        minlength:[4,'Firstname should be atleaset 4 characters']
    },
    email:{
        type:String,
        required:[true,'Please enter a password'],
        unique:true,
        validate:[validator.isEmail,'Please enter a valid email'],
    },
    password:{
        type:String,
        required:[true,"Please enter a password"],
        minlength:[6,'Password should be atleast 6 characters'],
        select:false,
    },
    phone:{
        type:Number,
        validate:{
            validator: function(v){
                return /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6-9]\d{9}$/gm.test(v)
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required:[true,"Please enter a valid phone number"],     
    },
    profilePic:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    industry:{
        type:String,
        default:"others",
    },
    department:{
        type:String,
        default:"OTHERS"
    },
    company:{
        type:String,
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
    // Subscriptions to be created after subscription model
});


// HASHING PASSWORD BEFORE SAVING
userSchema.pre('save',async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password,10);
});

// CREATING CUSTOM METHODS FOR GENERATING JWT TOKEN
userSchema.methods.getJWTToken = function() {
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    });
};

// COMPARE PASSWORD 
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password);
} 

// RESET PASSWORD TOKEN
userSchema.methods.getResetPasswordToken = function(){
    // GENERATING TOKEN
    const resetToken = crypto.randomBytes(20).toString("hex");

    // HASHING & ADDING TO USERSCHEMA
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

        this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

        return resetToken;
};


module.exports = mongoose.model("User",userSchema);
