import React, {useState} from 'react'
import './App.css';
import Products from './components/Products';
import RenderCart from './components/RenderCart';
import { createFromIconfontCN } from "@ant-design/icons";
import { Context } from './context';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart'


function Main() {

  // icon
  const IconFont = createFromIconfontCN({
    scriptUrl: [
      "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", // icon-javascript, icon-java, icon-shoppingcart (overrided)
      "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", // icon-shoppingcart, icon-python
    ],
  });

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
    <Context.Provider
      value={(cart, setCart, page, setPage, PAGE_PRODUCTS, PAGE_CART, removeFromCart, addToCart)}
    >
      { <div className="App">
        <header>
          <button
            className="main-btn"
            onClick={() => navigateTo(PAGE_PRODUCTS)}
          >
            View products
          </button>
          <button className="main-btn" onClick={() => navigateTo(PAGE_CART)}>
            Cart <IconFont type="icon-shoppingcart" />{" "}
            <span>{cart.length}</span>
          </button>
        </header>
        <div className="main">
          {page === PAGE_PRODUCTS &&  <Products addToCart={addToCart} />}
          {page === PAGE_CART && (
            <RenderCart
              PAGE_PRODUCTS={PAGE_PRODUCTS}
              navigateTo={navigateTo}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          )}
        </div>
      </div>}
    </Context.Provider>
  );
}

export default Main;