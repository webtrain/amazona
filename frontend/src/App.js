import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signOut } from './actions/userActions';
import './App.css';
import {
  HomeScreen,
  ProductScreen,
  CartScreen,
  SigInScreen,
  RegisterScreen,
  ShippingAddressScreen,
  PaymentMethodScreen,
  PlaceOrderScreen,
  OrderScreen,
} from './screens';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;
  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(signOut());
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="grid-container">
          <header className="row">
            <div>
              <Link to="/" className="brand">
                amazona
              </Link>
            </div>
            <div>
              <Link to="/cart" className="cart">
                cart {cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
              </Link>
              {userInfo ? (
                <div className="dropdown">
                  <Link to="#">
                    {userInfo.name} <i className="fa fa-caret-down"></i>
                  </Link>
                  <ul className="dropdown-content">
                    <Link to="#signout" onClick={signOutHandler}>
                      Sign out
                    </Link>
                  </ul>
                </div>
              ) : (
                <Link to="/signin">Sign in</Link>
              )}
            </div>
          </header>

          <main>
            <Route exact path="/" component={HomeScreen}></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/cart/:id?" component={CartScreen}></Route>
            <Route path="/signin" component={SigInScreen}></Route>
            <Route path="/register" component={RegisterScreen}></Route>
            <Route path="/shipping" component={ShippingAddressScreen}></Route>
            <Route path="/payment" component={PaymentMethodScreen}></Route>
            <Route path="/placeorder" component={PlaceOrderScreen}></Route>
            <Route path="/orders/:id" component={OrderScreen}></Route>
          </main>

          <footer className="row center">
            <p>all rights reserved &copy; | 2020</p>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
