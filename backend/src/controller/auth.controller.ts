import { Request, Response } from "express";

import { AuthService } from "../service/auth.service";

interface AuthenticatedRequest extends Request {
  user?: { id: string };
}

export class AuthController {
    private authService: AuthService;
    
    constructor() {
        this.authService = new AuthService();
    }
    
    register = async (req: Request, res: Response): Promise<void> => {
        try {
            const { name, email, password } = req.body;
            
            const user = await this.authService.registerUser(name, email, password);
            if (!user) {
                res.status(400).json({ message: "User registration failed" });
                return;
            }
            res.status(201).json(user);
        } catch (error : any) {
            res.status(500).json({ error : error.message || "Internal server error" });
        }
    }

    login = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;
            const { token } = await this.authService.loginUser(email, password);
            res.status(200).json({ token });
        } catch (error : any) {
            res.status(500).json({ error : error.message || "Internal server error" });
        }
    }

    me = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
        try{
            if (!req.user || !req.user.id) {
                res.status(401).json({ message: "Unauthorized" });
                return;
            }
            
            const user = await this.authService.meService(req.user.id);
            if (!user) {
                res.status(404).json({ message: "User not found" });
                return;
            }
            
            res.status(200).json(user);
        } catch (error : any) {
            res.status(500).json({ error : error.message || "Internal server error" });
        }
    }
}