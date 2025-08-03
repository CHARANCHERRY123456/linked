import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/db';
import app from './app';

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
