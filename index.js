import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
//import { json } from 'body-parser';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

//import routes
import authRoutes from './routes/auth.js';
//import { db } from './models/User';
//app
const { json } = bodyParser;
const app = express();
// db
connect(process.env.DATABASE)
  .then(() => console.log('DB Connected'));
//middlewares
app.use(json());
app.use(cors());
//routes middleware
app.use('/api', authRoutes);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});