import 'dotenv/config';
import express from 'express';
import UserController from './app/controllers/UserController';
import Queue from './app/lib/Queue';
const { createBullBoard } = require('bull-board')
const { BullAdapter } = require('bull-board/bullAdapter')

const app = express();

app.use(express.json());
app.post('/users', UserController.store);

// Implementar o Bull-board

app.listen(3000, () => {
    console.log("Server running on localhost:3000")
});