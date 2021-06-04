import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context';
import { createFromIconfontCN } from "@ant-design/icons";
import './style.css'


function Navbar() {
    const { count } = useGlobalContext()
    // const { id } = useGlobalContext();

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
                        <Link className='card-icon' to='/cart'>
                            <button className='main-btn'>
                                Cart <IconFont style={{background: 'inherit'}} type="icon-shoppingcart"/>{count.length}
                            </button>
                        </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
