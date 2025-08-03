import User from "../models/User";
import Post from "../models/Post";

export class ProfileService {
    async getUserProfile(userId: string): Promise<InstanceType<typeof User> | null> {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }

    async getUserPosts(userId: string): Promise<InstanceType<typeof Post>[]> {
        const posts = await Post.find({ user: userId });
        return posts;
    }
}