import express from 'express';
import cors from 'cors';
import useRouter from './routes/user.router';
import sessionRouter from './routes/session.router';
import authMiddleware from './middlewares/auth';
import todoRouter from './routes/todo.router';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', useRouter);
app.use('/session', sessionRouter);

app.use(authMiddleware);

app.use('/todo', todoRouter);

export { app };
