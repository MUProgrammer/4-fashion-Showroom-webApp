import express from "express";
import {
  authenticate,
  checkStatus,
  isAdmin,
} from "../../middlewares/authMiddleware.js";
import addArticle from "../../controllers/admin_controller/articles/addArticle.controller.js";
import UpdateArticle from "../../controllers/admin_controller/articles/updateArticle.controller.js";
const router = express.Router();

// add article
router.post("/article", authenticate, checkStatus, isAdmin, addArticle);
router.put("/article/:id", authenticate, checkStatus, isAdmin, UpdateArticle);
export default router;
