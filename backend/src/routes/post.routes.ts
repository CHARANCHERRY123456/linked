import { Router } from "express";
import { PostController } from "../controller/post.controller";
import { authMiddleware } from "../middleware/auth";

const postRouter = Router();
const postController = new PostController();

postRouter.post("/", authMiddleware, postController.createPost);
postRouter.get("/", postController.getAllPosts);
postRouter.get("/:id", postController.getPostById);

export default postRouter;
