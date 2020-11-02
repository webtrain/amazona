import express from 'express';
import data from './products.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Server is ready.');
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((item) => item._id == req.params.id);
  
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not  find' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
