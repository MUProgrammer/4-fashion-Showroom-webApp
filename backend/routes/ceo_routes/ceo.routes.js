import express from "express";
import { authenticate, isCEO } from "../../middlewares/authMiddleware.js";
import getAllUsers from "../../controllers/ceo_controllers/getAllUser.controller.js";
import getUserById from "../../controllers/ceo_controllers/getUserById.controller.js";
import updateUserById from "../../controllers/ceo_controllers/updateUserById.controller.js";
import deleteUserById from "../../controllers/ceo_controllers/deleteUserById.controller.js";
import statusById from "../../controllers/ceo_controllers/status.controller.js";
const router = express.Router();

// get All Users
router.route("/users").get(authenticate, isCEO, getAllUsers);
// get user By ID , update user by ID, delete user by ID
router
  .route("/user/:id")
  .get(authenticate, isCEO, getUserById)
  .put(authenticate, isCEO, updateUserById)
  .delete(authenticate, isCEO, deleteUserById)
  .post(authenticate, isCEO, statusById);
export default router;
