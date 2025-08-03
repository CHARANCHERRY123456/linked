"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";

interface Props {
  post: { _id: string; title: string; content: string; createdAt: string; user: { _id: string; name: string } };
}

const PostCard: FC<Props> = ({ post }) => {
  const router = useRouter();

  return (
    <div className="p-4 bg-white rounded shadow mb-4 cursor-pointer">
      <p
        className="font-semibold text-blue-600 hover:underline"
        onClick={() => router.push(`/profile/${post.user._id}`)}
      >
        {post.user.name}
      </p>
      <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
      <h3 className="text-lg font-bold mt-2">{post.title}</h3>
      <p className="mt-1">{post.content}</p>
    </div>
  );
};

export default PostCard;
