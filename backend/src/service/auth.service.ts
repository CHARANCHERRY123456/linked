import User from "../models/User";
import { hash, compare } from "bcryptjs";
import { signToken, verifyToken } from "../utils/jwt.util";

export class AuthService {
  registerUser = async (name: string, email: string, password: string): Promise<InstanceType<typeof User> | null> => {
    if (!name || !email || !password) {
      throw new Error("Name, email, and password are required");
    }
    const hashedPassword = await hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    return user;
  };

  loginUser = async (email: string, password: string): Promise<{ token: string }> => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }
    const token = signToken({ id: user._id });
    return { token };
  };

  meService = async (id : string): Promise<InstanceType<typeof User> | null> => {
    const user = await User.findById(id);
    return user;
  };
}