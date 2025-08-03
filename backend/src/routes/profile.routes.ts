import { Router } from "express";
import { ProfileController } from "../controller/profile.controller";

const profileRouter = Router();
const controller = new ProfileController()

profileRouter.get("/:id" , controller.getProfile);
profileRouter.get("/:id/posts" , controller.getUserPosts );

export default profileRouter;
