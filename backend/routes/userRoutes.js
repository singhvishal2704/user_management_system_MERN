import express from "express";
const router = express.Router();
import {
  registerUser,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

router.route("/").post(registerUser).get(getUsers);

router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);

export default router;
