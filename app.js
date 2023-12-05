import {connectDB} from './src/db.js'

import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './src/routes/auth.routes.js';
import taskRoutes from './src/routes/tasks.routes.js';
 
const app = express();

app.use(cors(
    {origin: "https://testdeploy-rust.vercel.app/login"}
)); 
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', taskRoutes);

connectDB();

app.listen(3000, () => {
    console.log("server conected to " + 3000)
});
