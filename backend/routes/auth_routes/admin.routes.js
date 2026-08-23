import express from "express";
import { authenticate } from "../../middlewares/authMiddleware.js";
import { getCurrentUserProlie } from "../../controllers/admin_controller/getCurrentUserProfile.controller.js";
const router = express.Router();

// getProfile
router.route("/getProfile").get(authenticate, getCurrentUserProlie);

export default router;
