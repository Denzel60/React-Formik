import { Router } from "express";
import { createUser, loginUser } from "../controllers/user.controllers.js";
import verifyToken from "../middlewares/verifyToken.js";
const router = Router();

router.post("/register", createUser);

router.post("/login", loginUser);

export default router;
