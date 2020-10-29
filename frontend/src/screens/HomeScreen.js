import React from 'react';
import data from '../products';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <div className="row center">
      <div className="products-wrapper">
        {data.products.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
