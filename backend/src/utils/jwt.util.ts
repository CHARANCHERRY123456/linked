import jwt from "jsonwebtoken";

const JWT_SECRET: string | undefined = process.env.JWT_SECRET;

function getJwtSecret(): string {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  return JWT_SECRET;
}

console.log("JWT_SECRET loaded:", JWT_SECRET);

export function signToken(payload: object): string {
  return jwt.sign(payload, getJwtSecret());
}

export function verifyToken(token: string): any {
  console.log("Verifying token:", token);
  console.log("Using JWT_SECRET:", getJwtSecret());
  return jwt.verify(token, getJwtSecret());
}
