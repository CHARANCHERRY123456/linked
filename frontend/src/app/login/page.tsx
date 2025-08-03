"use client"
import { FormEvent, useState } from "react"

import Input from "@/components/Input"
import axiosClient from "@/utils/axiosClient"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/authContext"

export default function Login(){
    const router = useRouter();
    const { login } = useAuth(); // destructure login function
    const [email , setEmail] = useState<string>("");
    const [password , setPassword] = useState<string>("");

    async function onSubmit(e:FormEvent) {
        e.preventDefault();
        const res = await axiosClient.post("/auth/login" , {email , password});
        login(res.data.token);
        router.push("/");
    }

    return (
        <div className="max-w-sm mx-auto mt-20 p-6 border rounded">
        <form onSubmit={onSubmit}>
            <Input label="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <Input label="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
        </form>
        </div>
    );
}