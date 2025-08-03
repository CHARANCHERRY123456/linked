import { NextFunction , Response } from "express";
import { verifyToken } from "../utils/jwt.util";

export function authMiddleware(req: any, res: Response, next: NextFunction): void {
    const token = req.headers.authorization?.split(" ")[1];
    
    if (!token) {
        res.status(401).json({ message: "No token is provided" });
        return;
    }

    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch (error : any) {
        console.log(`Token verification failed: ${error.message}`);
        res.status(401).json({ error : error.message || "Invalid token" });
    }
}