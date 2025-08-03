"use client";

import { FC } from "react";

interface Props {
  post: { title: string; content: string; createdAt: string };
}

const ProfilePostCard: FC<Props> = ({ post }) => (
  <div className="p-4 bg-white rounded shadow mb-4">
    <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
    <h3 className="text-lg font-bold mt-2">{post.title}</h3>
    <p className="mt-1">{post.content}</p>
  </div>
);

export default ProfilePostCard;
