const express = require('express');
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserDetails, updatePassword, updateUserProfile, getAllUser, getSingleUser,deleteUser, updateUserRole } = require('../controllers/userController');
const {isAuthenticatedUser, isAdmin} = require('../middleware/auth')

const router = express.Router();

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/password/forgot').post(forgotPassword)
router.route('/password/reset/:token').put(resetPassword)
router.route('/logout').get(logoutUser)
router.route('/me').get(isAuthenticatedUser,getUserDetails)
router.route('/me/update').put(isAuthenticatedUser,updateUserProfile)
router.route('/password/update').put(isAuthenticatedUser,updatePassword)
router.route('/admin/users').get(isAuthenticatedUser,isAdmin("isAdmin"),getAllUser)
router.route('/admin/user/:id').get(isAuthenticatedUser,isAdmin("isAdmin"),getSingleUser).put(isAuthenticatedUser,isAdmin("isAdmin"),updateUserRole).delete(isAuthenticatedUser,isAdmin("isAdmin"),deleteUser)



module.exports = router