import React from 'react'
import EmptyPage from './EmptyPage';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// import '../App.css'

function RenderCart({ removeFromCart, cart }) {
  if (cart.length < 1) {
    return (
      <Router>
         {/* <Switch> */}
       <Route> 
        <EmptyPage />
          </Route> 
         {/* </Switch> */}
       </Router>
      )
   }
  
  if (cart.length >= 1) {

    return (<>
      
      <h1 className='title'>Cart</h1>
      <main>
        {cart.map((item, index) => {
          const { name, cost, image } = item;
          return (
            <section className='section'>
              <div className='content' key={index}>
                <h3 className='name'>{name}</h3>
                <h4 className='cost'>{cost}</h4>
                <img src={image} alt={name} />
                <button className='add-btn' onClick={() => removeFromCart(item)}>Remove to Cart</button>
              </div>
            </section>
          );
        })}
      </main>
    </>
    )
  }
}

export default RenderCart;
