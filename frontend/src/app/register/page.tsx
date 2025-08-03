"use client";

import axiosClient from "@/utils/axiosClient";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Input from "@/components/Input";

export default function RegisterPage() {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [name, setName] = useState<string>("");

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        try {
            const user = await axiosClient.post("/auth/register", { email, password, name });
            if (user) {
                router.push("/login");
            }
        } catch (err: any) {
            setError(err.response?.data?.error || "Registration failed");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Create your account</h2>
                    <p className="text-gray-600">Join our community and start connecting</p>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input 
                            label="Full Name" 
                            value={name} 
                            onChange={e => setName(e.target.value)}
                            placeholder="Enter your full name"
                        />
                        <Input 
                            label="Email" 
                            type="email"
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                        <Input 
                            label="Password" 
                            type="password" 
                            value={password} 
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Create a strong password"
                        />
                        <Input 
                            label="Confirm Password" 
                            type="password" 
                            value={confirmPassword} 
                            onChange={e => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                        />
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                                {error}
                            </div>
                        )}
                        <button 
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 shadow-sm"
                        >
                            Create Account
                        </button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                                Sign in
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}