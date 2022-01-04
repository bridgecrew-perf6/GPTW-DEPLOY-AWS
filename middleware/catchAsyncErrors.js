const logger = require("../utils/logger")

module.exports = myFunc => (req,res,next) => {
    Promise.resolve(myFunc(req,res,next)).catch(next)
    // .catch((err) => {
    //     res.json({
    //         successs:false,
    //         error:err.message
    //     });
    //     logger.error(`Error:${err.message}`)
    //     next()
    // })
}