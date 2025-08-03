import jwt from "jsonwebtoken";

const JWT_SECRET: string | undefined = process.env.JWT_SECRET;


export function signToken(payload: object): string {
  return jwt.sign(payload, JWT_SECRET!);
}

export function verifyToken(token: string): any {
  return jwt.verify(token, JWT_SECRET!);
}
