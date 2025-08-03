import axiosClient from "@/utils/axiosClient";
import ProfilePostCard from "@/components/ProfilePostCard";

interface Props{
    params: {
        id: string;
    };
}

export default async function ProfilePage({ params }: Props) {
    const { id } = await params;
    const userRes = await axiosClient.get(`/profile/${id}`);
    const user = userRes.data;
    const postsRes = await axiosClient.get(`/profile/${id}/posts`);
    const posts = postsRes.data;

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">{user.name}'s Profile</h1>
            {user.bio && (
                <div className="mb-6">
                    <p className="text-gray-700">{user.bio}</p>
                </div>
            )}
            <h2 className="text-xl font-semibold mb-4">Posts</h2>
            {posts.length > 0 ? (
                <div className="space-y-4">
                    {posts.map((post: any) => (
                        <ProfilePostCard key={post._id} post={post} />
                    ))}
                </div>
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    );
}