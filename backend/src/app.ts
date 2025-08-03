import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.routes';
import postRouter from './routes/post.routes';
import profileRouter from './routes/profile.routes';
import morgan from 'morgan';
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.use('/api/auth', authRouter);
app.use('/api/post', postRouter);
app.use('/api/profile' , profileRouter);


app.get('/', (req, res) => {
  res.send('Welcome to the Linked Backend API');
});

export default app;