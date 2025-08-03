import { ProfileService } from "../service/profile.service";
import { AuthenticatedRequest } from "../types/express";
import { Response } from "express";

export class ProfileController {
    private profileService: ProfileService;

    constructor() {
        this.profileService = new ProfileService();
    }

    getProfile = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
        try {
            const userId = req.params?.id;
            if (!userId) {
                res.status(401).json({ message: "no user id provided" });
                return;
            }
            const profile = await this.profileService.getUserProfile(userId)
            if (!profile) {
                res.status(404).json({ message: "Profile not found" });
                return;
            }
            res.status(200).json(profile);
        } catch (error: any) {
            console.log("error in the get profile controller : " , error.message);
            res.status(500).json({ error: error.message || "Internal server error" });
        }
    }

    getUserPosts = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
        try {
            const userId = req.params?.id;
            const posts = await this.profileService.getUserPosts(userId);
            res.status(200).json(posts); // Make sure to send the array directly
        } catch (error: any) {
            res.status(500).json({ error: error.message || "Internal server error" });
        }
    }
}