import express from 'express';
import config from './mongoDbConfig.js';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Server is ready.');
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
