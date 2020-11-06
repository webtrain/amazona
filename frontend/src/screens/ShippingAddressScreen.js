import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

const ShippingAddressScreen = (props) => {
  const userSignIn = useSelector((state) => state.userSignIn);

  const { userInfo } = userSignIn;
  if (!userInfo) {
    props.history.push('/signin');
  }

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ fullName, address, city, postalCode, country }));
    props.history.push('/payment');
    // TODO: dispatch save shipping information
  };

  return (
    <div className="shipping">
      <CheckoutSteps step1 step2 />

      <form action="" className="form" onSubmit={submitHandler}>
        <div className="form-wrapper">
          <div>
            <h1>Shipping Address</h1>
          </div>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter Full Name"
              value={fullName}
              required
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter Address"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              placeholder="Enter City"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="postalCode">PostalCode</label>
            <input
              type="text"
              id="postalCode"
              placeholder="Enter PostalCode"
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              placeholder="Enter Country"
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div>
            <button className="button primary" type="submit">
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddressScreen;
