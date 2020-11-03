import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import { HomeScreen, ProductScreen, CartScreen } from './screens';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

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
              <Link to="/cart" className="cart">cart {cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}</Link>
              <Link to="/signin">Sign in</Link>
            </div>
          </header>

          <main>
            <Route exact path="/" component={HomeScreen}></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/cart/:id?" component={CartScreen}></Route>
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
