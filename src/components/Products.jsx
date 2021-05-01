import React, {useState} from 'react'
import { Link } from 'react-router-dom';

// import { data } from '../data';
// import '../App.css'

function Products({ id, name, image, cost }) {
  return (
    <>
        <section className='section'>
          <div className='content'>
            <h3 className="name">{name}</h3>
            <h4 className="cost">{cost}</h4>
            <img src={image} alt={name} />
            <div className="add-btn">Add to Cart</div>
          </div>
        </section>
    </>
  )
}

// function Products({ addToCart }) {
//   const [products, setProducts] = useState(data);
//   return (
//     <>
//       <h1 className='title'>Phones</h1>
//       <main>
//       {
//         products.map((item, index) => {
//           const { name, cost, image, id } = item;
//             return (
//            <section className='section'>
//              <div className='content' key={index}>
//                <h3 className='name'>{name}</h3>
//                <h4 className='cost'>{cost}</h4>
//                <img src={image} alt={name} />
//                <button className='add-btn' onClick={() => addToCart(item)}>Add to Cart</button>
//                <Link to={`/product/${id}`}>details</Link>
//              </div>
//              </section>
//           )
//         })
//         }
//       </main>
//     </>
//   )
// }
export default Products
   
