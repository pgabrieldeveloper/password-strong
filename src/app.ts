import express from 'express';
import cors from 'cors';
import router from './routes/password.routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router)
app.listen(3333, ()=> console.log("Running on port 3333"));


