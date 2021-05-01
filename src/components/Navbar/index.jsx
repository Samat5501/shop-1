import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context';
import { createFromIconfontCN } from "@ant-design/icons";
import './style.css'
import Products from '../Products';
import RenderCart from '../RenderCart';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function Navbar() {

    // const PAGE_CART = 'cart'
    // const PAGE_PRODUCTS = 'products';
    // const { navigateTo } = useContext(Context);
    
    //   const [page, setPage] = useState(PAGE_PRODUCTS);

    //   const [cart, setCart] = useState([]);

    

//     const navigateTo = (nextPage) => {
//     setPage(nextPage)
//   }


    const IconFont = createFromIconfontCN({
    scriptUrl: [
      "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", // icon-javascript, icon-java, icon-shoppingcart (overrided)
      "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", // icon-shoppingcart, icon-python
    ],
  });
    


    return (
        <div className='navbar'>
            <div className='nav-center'>
                <Link to='/'>
                    <h3 className='logo'>TeliHouse</h3> 
                </Link>
                <ul className='nav-links'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                     <li>
                        <Link to='/product'>Product</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    {/* <li>
                        <Link to='/cart'>
                            <button className='main-btn'>
                                Cart <IconFont type="icon-shoppingcart" />{" "}
                            </button>
                        </Link>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
