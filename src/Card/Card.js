import React from "react";
import { useSelector } from "react-redux";
// import { useParams } from "react-router";
import { useGlobalContext } from "../context";

function Card() {
    const product = useSelector((state) => state.product);
    console.log(product);
    const {addedCart} = useGlobalContext();
    
    return <div>
        {/* {product
            // .filter(card => card.id === id)
            .map((card, index) => {
            const { name } = card;
            return (
                <div key={index}>
                    <p>Name : { name}</p>
                </div>
            ) */}
      {/* } */}
      {/* ) */}
        {/* } */}
        {addedCart}
  </div>;
}

export default Card;
