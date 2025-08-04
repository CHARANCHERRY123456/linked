"use client";

import axiosClient from "@/utils/axiosClient";
import { LOCAL_STORAGE_TOKEN_KEY } from "@/utils/constants";
import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from "@/utils/storage";
import { ReactNode, useEffect, useState, createContext, useContext } from "react";

interface User {
    _id: string;
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    isLoading: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const token = getLocalStorageItem(LOCAL_STORAGE_TOKEN_KEY);
        if (token) {
            setToken(token);
            axiosClient.get("/auth/me")
                .then(response => {
                    setUser(response.data.user); 
                })
                .catch(() => {
                    setUser(null);
                })
                .finally(() => setIsLoading(false));
        } else {
            setIsLoading(false);
        }
    }, []);

    const login = (token: string) => {
        setLocalStorageItem(LOCAL_STORAGE_TOKEN_KEY, token);
        setToken(token);
        axiosClient.get("/auth/me")
            .then(response => {
                setUser(response.data.user);
            })
            .catch(() => {
                setUser(null);
            });
    };

    const logout = () => {
        removeLocalStorageItem(LOCAL_STORAGE_TOKEN_KEY);
        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};