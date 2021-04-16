import React, {useState} from 'react'
import './App.css';
import Products from './components/Products';
import RenderCart from './components/RenderCart';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart'


function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  }
  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter(item => item !== itemToRemove));
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage)
  }
  
  return (
      <div className="App">
      <header>
        <button className='main-btn' onClick={() => navigateTo(PAGE_PRODUCTS)}>
            View products
          </button>
          <button className='main-btn' onClick={() => navigateTo(PAGE_CART)}>
            Go to Cart <span>{cart.length}</span>
          </button>
          
      </header>
      <div className='main'>
        {page === PAGE_PRODUCTS && <Products
          addToCart={addToCart}
        />}
        {page === PAGE_CART && (
          <RenderCart
            PAGE_PRODUCTS={PAGE_PRODUCTS}
            navigateTo={navigateTo}
            cart={cart}
            removeFromCart={removeFromCart}
          />
        )}
      </div>
      </div>
  );
}

export default App;