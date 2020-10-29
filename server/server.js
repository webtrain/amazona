import express from 'express';
import products from './products.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Server is ready.');
});

app.get('/api/products', (req, res) => {
  res.send(products.products);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
