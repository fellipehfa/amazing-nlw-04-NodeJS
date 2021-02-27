import 'reflect-metadata'
import express from 'express';
import "./database";
import { UserController } from './controllers/UserController';
import { router } from './routes';

const app = express();

app.use(router)

app.listen(3333, () => console.log('Server is running!🚀⚡'));
