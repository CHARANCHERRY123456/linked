"use client";

import axiosClient from "@/utils/axiosClient";
import { useState } from "react";


export default function PostForm(){
    const [content , setContent] = useState<string>("");
    const [title , setTitle] = useState<string>("");
    const [error , setError] = useState<string>("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!title || !content) {
            setError("Title and content are required");
            return;
        }
        try {
            const res = await axiosClient.post("/post", { title, content });
            setTitle("");
            setContent("");
            setError("");
        } catch (err: any) {
            setError(err.response?.data?.error || "Failed to create post");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            {error && <div className="text-red-600 mb-2">{error}</div>}
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
                placeholder="Post Title"
                required
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Write something..."
            required
            />
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Post</button>
        </form>
    );
}