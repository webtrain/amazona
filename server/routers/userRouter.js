import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../products.js';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {});

userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

export default userRouter;
