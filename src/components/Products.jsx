import React, {useState} from 'react'
import { data } from '../data';
// import '../App.css'



function Products({addToCart}) {
     const [products, setProducts] = useState(data)
    return (<>
        <h1 className='title'>Phones</h1>
        <main>
            
            
      {products.map((item, index) => {
        const {name, cost, image} = item;
          return (
            <section className='section'>
          <div className='content' key={index}>
            <h3 className='name'>{name}</h3>
            <h4 className='cost'>{cost}</h4>
            <img src={image} alt={name} />
            <button className='add-btn' onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
              </section>
        );
      })}
        </main>
        </>
    )
}

export default Products
