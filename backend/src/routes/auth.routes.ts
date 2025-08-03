import { Router } from "express";
import { AuthController } from "../controller/auth.controller";
import { authMiddleware } from "../middleware/auth";

const authRouter = Router();
const authController = new AuthController();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.get("/me", authMiddleware, authController.me);

export default authRouter;