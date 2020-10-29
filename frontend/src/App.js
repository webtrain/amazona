import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { HomeScreen, ProductScreen } from './screens';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="grid-container">
          <header className="row">
            <div>
              <a className="brand" href="/">
                amazona
              </a>
            </div>
            <div>
              <a href="/cart">cart</a>
              <a href="/signin">Sign in</a>
            </div>
          </header>

          <main>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/product/:id" component={ProductScreen} exact></Route>
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
