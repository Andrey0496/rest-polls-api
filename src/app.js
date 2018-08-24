import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import setGlobalMiddleware from './middleware';
import dbConnect from './db';
import authRoute from './api/auth/auth.route';

dotenv.config();

const app = express();

setGlobalMiddleware(app);

dbConnect();

app.use('/api/auth',authRoute);

app.get('/*',(req,res) =>{
    res.sendFile(path.join(__dirname,'index.html'));
});

export default app;
