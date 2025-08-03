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
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">Mini LinkedIn</Link>
                <div>
                    {user ? (
                        <>
                            <span className="mr-4">Welcome, {user.name}</span>
                            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="mr-4">Login</Link>
                            <Link href="/register">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}