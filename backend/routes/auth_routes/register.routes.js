import express from "express"
import registerUser from "../../controllers/auth_controllers/register.controller.js"
import verifyOtp from "../../controllers/auth_controllers/verifyOtp.controller.js"
import { createCEO } from "../../controllers/auth_controllers/createCEO.controller.js"
import approveRequest from "../../controllers/auth_controllers/ceoApproval.controller.js"
import login from "../../controllers/auth_controllers/login.controller.js"
import logout from "../../controllers/auth_controllers/logout.controller.js"
import forgetPassword from "../../controllers/auth_controllers/forgetPassword.controller.js"
import resetPassword from "../../controllers/auth_controllers/resetPassword.controller.js"
import { isCEO, protect } from "../../middlewares/authMiddleware.js"
import resendOTP from "../../controllers/auth_controllers/resendOtp.controller.js"
const router = express.Router()

// register the user 
router.route("/register").post(registerUser)
// create ceo
router.route("/createCEO").post(createCEO)
// verify otp 
router.route("/verifyOtp").post(verifyOtp)
// resend OTP
router.route("/resendOtp").post(resendOTP)

// ceo approval
router.route("/ceoApproval/:requestId").post(approveRequest)
// login
router.route("/login").post(login)
// logout 
router.route("/logout").post(logout)
// forgot password
router.route("/forgetPassword").post(forgetPassword)
// reset password
router.route("/resetPassword/:token").post(resetPassword)
export default router