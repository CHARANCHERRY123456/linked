"use client";


import PostForm from "@/components/PostForm";
import PostCard from "@/components/PostCard";
import axiosClient from "@/utils/axiosClient";
import { useAuth } from "@/context/authContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const { user } = useAuth();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (!user) {
          console.log("no user is found");
          
          router.push("/login");
        }
        async function fetchPosts() {
            try {
                setLoading(true);
                setError("");
                const response = await axiosClient.get("/post");
                setPosts(response.data);
            } catch (err) {
                setError("Failed to fetch posts");
                setPosts([]);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Welcome to Mini LinkedIn</h1>
            {user && <PostForm />}
            {loading ? (
                <div>Loading posts...</div>
            ) : error ? (
                <div className="text-red-600 mb-2">{error}</div>
            ) : (
                <div className="space-y-4">
                    {posts.map((post: any) => (
                        <PostCard key={post._id} post={post} />
                    ))}
                </div>
            )}
        </div>
    );
}
