import React from 'react'
// import '../App.css'

function RenderCart({ removeFromCart, cart }) {
    return (<>
        <h1 className='title'>Cart</h1>
       <main>
      {cart.map((item, index) => {
        // const { name, cost, image } = item;
          return (
            <section className='section'>
          <div className='content' key={index}>
            <h3 className='name'>{item.name}</h3>
            <h4 className='cost'>{item.cost}</h4>
            <img src={item.image} alt={item.name} />
            <button className='add-btn' onClick={() => removeFromCart(item)}>Remove to Cart</button>
                  </div>
              </section>
        );
      })}
        </main>
        </>
    )
}

export default RenderCart;
