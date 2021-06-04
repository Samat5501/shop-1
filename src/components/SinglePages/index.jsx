import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../../context';
import { add_product } from '../../store/actions/action';
// import Loading from '../Loading';
import './styles.css';


function SinglePhoneList() {
    const { name } = useParams();
    // const { id } = useParams();
    const { phones , setCount, addedCart, setAddedCart} = useGlobalContext();
    
    
    const product = useSelector(state => state.product);
    console.log(product);
    const dispatch = useDispatch();

    const addToCart = () => {
        setCount(name)
        setAddedCart(
            dispatch(add_product(product))
        )
        console.log(addedCart);
    }
       
            return (
                <section className='single-page1'>
                        <h1 className='single-title'>TeliHouse</h1>
                        {phones
                            .filter((card) => card.name === name)
                            .map((card, index) => (
                                <div className='drink' key={index}>
                                    <img src={card.image} alt={card.title} />
                                    <div className='drink-info'>
                                        <p>
              <span className="drink-data">name :</span> {card.name}
            </p>
            <p>
              <span className="drink-data">cost :</span> {card.cost}
            </p>
                                    <p className='info-description'>
              <span className="drink-data ">info :</span> {card.description}
            </p>
                                    </div>
                            </div>
                            )
                        )}
                    <Link to='/'><button className='add-btn'>Back Home</button> </Link>
                    <Link><button className='add-btn' onClick={addToCart}>ADD to Cart</button></Link> 
                </section>
            )
    }

export default SinglePhoneList
