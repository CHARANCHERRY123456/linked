import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/db';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Linked Backend API');  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
