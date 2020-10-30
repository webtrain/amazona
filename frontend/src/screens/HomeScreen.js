import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import { LoadingBox, MessageBox } from '../components/index';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/products');
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="error">{error}</MessageBox>
      ) : (
        <div className="row center">
          <div className="products-wrapper">
            {products.map((product) => (
              <Product key={product._id} {...product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HomeScreen;
