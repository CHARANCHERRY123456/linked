"use client";

import axiosClient from "@/utils/axiosClient";
import { useState } from "react";



export default function PostForm({ onPostCreated }: { onPostCreated?: (post: any) => void }) {
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!title || !content) {
            setError("Title and content are required");
            return;
        }
        setLoading(true);
        try {
            const res = await axiosClient.post("/post", { title, content });
            setTitle("");
            setContent("");
            setError("");
            if (onPostCreated) {
                onPostCreated(res.data);
            }
        } catch (err: any) {
            setError(err.response?.data?.error || "Failed to create post");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Create a Post</h2>
            <form onSubmit={handleSubmit}>
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                        {error}
                    </div>
                )}
                <div className="space-y-4">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 placeholder-gray-400"
                        placeholder="What's the title of your post?"
                        required
                    />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 placeholder-gray-400 resize-none"
                        placeholder="Share your thoughts..."
                        rows={4}
                        required
                    />
                </div>
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                    <div className="flex space-x-4">
                        <button type="button" className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm">Photo</span>
                        </button>
                        <button type="button" className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm">Video</span>
                        </button>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 shadow-sm flex items-center justify-center space-x-2"
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Posting...</span>
                            </>
                        ) : (
                            <span>Post</span>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}