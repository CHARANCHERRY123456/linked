"use client";

import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const { user, logout } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.push("/login");
    };

    return (
        <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                    Mini LinkedIn
                </Link>
                <div className="flex items-center space-x-6">
                    {user ? (
                        <>
                            <div className="flex items-center space-x-4">
                                <div 
                                    onClick={() => router.push(`/profile/${user._id}`)}
                                    className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer hover:bg-blue-600 transition-colors"
                                >
                                    {user.name?.charAt(0).toUpperCase()}
                                </div>
                                <span className="text-gray-700 font-medium">Welcome, {user.name}</span>
                            </div>
                            <button 
                                onClick={handleLogout} 
                                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 shadow-sm"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link 
                                href="/login" 
                                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                            >
                                Login
                            </Link>
                            <Link 
                                href="/register" 
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 shadow-sm"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}