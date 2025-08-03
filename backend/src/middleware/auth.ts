import { NextFunction , Response } from "express";
import { verifyToken } from "../utils/jwt.util";

export function authMiddleware(req: any, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;
    console.log("Authorization header:", authHeader);

    const token = authHeader?.split(" ")[1];
    console.log("Extracted token:", token);

    if (!token) {
        res.status(401).json({ message: "No token is provided" });
        return;
    }

    try {
        const decoded = verifyToken(token);
        console.log("Decoded token:", decoded);
        req.user = decoded;
        next();
    } catch (error : any) {
        console.log(`Token verification failed: ${error.message}`);
        res.status(401).json({ error : error.message || "Invalid token" });
    }
}