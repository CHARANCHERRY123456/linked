"use client"
import { FormEvent, useState } from "react"

import Input from "@/components/Input"
import axiosClient from "@/utils/axiosClient"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/authContext"

export default function Login() {
    const router = useRouter();
    const { user, isLoading, login } = useAuth();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    // Redirect to home if already logged in
    if (!isLoading && user) {
        if (typeof window !== "undefined") {
            router.replace("/");
        }
        return null;
    }

    async function onSubmit(e: FormEvent) {
        e.preventDefault();
        const res = await axiosClient.post("/auth/login", { email, password });
        login(res.data.token);
        router.push("/");
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="text-lg text-gray-700">Checking authentication...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
                    <p className="text-gray-600">Sign in to your account to continue</p>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <form onSubmit={onSubmit} className="space-y-6">
                        <Input
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                        <Input
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 shadow-sm"
                        >
                            Sign In
                        </button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <a href="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}