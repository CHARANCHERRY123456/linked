import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.routes';
import postRouter from './routes/post.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/post', postRouter);
app.get('/', (req, res) => {
  res.send('Welcome to the Linked Backend API');
});

export default app;
