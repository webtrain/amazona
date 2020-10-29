import './App.css';
import data from './products';
import Product from './components/Product';

function App() {
  return (
    <div classNameName="App">
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              amazona
            </a>
          </div>
          <div>
            <a href="/cart">cart</a>
            <a href="/signin">sign in</a>
          </div>
        </header>

        <main>
          <div className="row center">
            <div className="products-wrapper">
              {data.products.map((product) => (
                <Product key={product.id} {...product} />
              ))}
            </div>
          </div>
        </main>

        <footer className="row center">
          <p>all rights reserved &copy; | 2020</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
