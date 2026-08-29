import express from "express";
import { authenticate, isCEO } from "../../middlewares/authMiddleware.js";
import getAllUsers from "../../controllers/ceo_controllers/getAllUser.controller.js";

const router = express.Router();

// get All Users
router.route("/").get(authenticate, isCEO, getAllUsers);

export default router;
