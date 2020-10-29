import React from 'react';
import Rating from './Rating';

const Product = ({ _id, image, name, price, rating, numReviews }) => {
  return (
    <div className="card">
      <a href={`/product/${_id}`}>
        <img className="medium" src={image} alt={name} />
      </a>
      <div className="card-body">
        <a href="product.html">
          <h2>{name}</h2>
        </a>
        <Rating rating={rating} reviews={numReviews} />
        <div className="price">${price}</div>
      </div>
    </div>
  );
};

export default Product;
