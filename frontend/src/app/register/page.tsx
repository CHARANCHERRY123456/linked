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
        <div className="max-w-sm mx-auto mt-20 p-6 border rounded">
            <form onSubmit={handleSubmit}>
                <Input label="Name" value={name} onChange={e => setName(e.target.value)} />
                <Input label="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <Input label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <Input label="Confirm Password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                {error && <div className="text-red-600 mb-2">{error}</div>}
                <button className="w-full bg-green-600 text-white p-2 rounded">Register</button>
            </form>
        </div>
    );
}