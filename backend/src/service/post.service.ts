import Post from "../models/Post";

export class PostService {
  createPost = async (title: string, content: string, userId: string): Promise<InstanceType<typeof Post> | null> => {
    if (!title || !content || !userId) {
      throw new Error("Title, content, and user ID are required");
    }
    const post = new Post({ title, content, user: userId });
    await post.save();
    return post;
  };

  getPosts = async (): Promise<InstanceType<typeof Post>[]> => {
    return await Post.find().populate("user", "name email");
  };

  getPostById = async (id: string): Promise<InstanceType<typeof Post> | null> => {
    return await Post.findById(id).populate("user", "name email");
  };
}