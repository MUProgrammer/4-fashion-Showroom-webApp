import express from "express";
import {
  authenticate,
  checkStatus,
  isSubAdmin,
} from "../../middlewares/authMiddleware.js";
import addArticle from "../../controllers/subAdmin_controller/articles/addArticle.controller.js";

const router = express.Router();

router.post("/article", authenticate, checkStatus, isSubAdmin, addArticle);

export default router;
