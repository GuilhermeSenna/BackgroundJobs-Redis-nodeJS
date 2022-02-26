import 'dotenv/config';
import express from 'express';
import UserController from './app/controllers/UserController';

const app = express();

app.use(express.json());
app.post('/users', UserController.store)

app.listen(3000, () => {
    console.log("Server running on localhost:3000")
});