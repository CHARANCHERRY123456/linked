import { Request , Response } from "express";
import { AuthenticatedRequest } from "../types/express";
import { PostService } from "../service/post.service";

export class PostController {
    private postService: PostService;

    constructor() {
        this.postService = new PostService();
    }

    createPost = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
        try {
            const { title, content } = req.body;
            const userId = req.user?.id;

            if (!userId) {
                res.status(401).json({ message: "Unauthorized" });
                return;
            }

            const post = await this.postService.createPost(title, content, userId);
            res.status(201).json(post);
        } catch (error: any) {
            res.status(500).json({ error: error.message || "Internal server error" });
        }
    }

    getAllPosts = async (req: Request, res: Response): Promise<void> => {
        try {
            const posts = await this.postService.getPosts();
            res.status(200).json(posts);
        } catch (error: any) {
            res.status(500).json({ error: error.message || "Internal server error" });
        }
    }

    getPostById = async (req: Request, res: Response): Promise<void> => {
        try {
            const postId = req.params.id;
            const post = await this.postService.getPostById(postId);

            if (!post) {
                res.status(404).json({ message: "Post not found" });
                return;
            }

            res.status(200).json(post);
        } catch (error: any) {
            res.status(500).json({ error: error.message || "Internal server error" });
        }
    }
}