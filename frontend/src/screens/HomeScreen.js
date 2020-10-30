import React, { useEffect } from 'react';
import Product from '../components/Product';
import { LoadingBox, MessageBox } from '../components/index';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

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
