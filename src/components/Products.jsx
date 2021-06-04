import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Products({ name, image, cost }) {
  const [phone, setPhone] = useState([])
  return (
    <>
        <section className='section'>
          <div className='content'>
            <h3 className="name">{name}</h3>
            <h4 className="cost">{cost}</h4>
            <img src={image} alt={name} /> 
          <Link to={`/phone/${name}`} className="add-btn">
            details</Link>
          </div>
        </section>
    </>
  )
}
export default Products
