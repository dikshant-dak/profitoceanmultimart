import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/Logo PO.jpg'
// import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { FiShoppingCart } from "react-icons/fi";


const Navbar = () => {

  let [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const [moreDropdownVisible, setMoreDropdownVisible] = useState(false);

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  const toggleMoreDropdown = () => {
    setMoreDropdownVisible(!moreDropdownVisible);
  };

  return (
    <div className='nav'>
      <Link to='/' onClick={()=>{setMenu("shop")}} style={{ textDecoration: 'none' }} className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Profit Ocean Multimart</p>
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{ textDecoration: 'none' }}>Home</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li><Link to='/aboutus' style={{ textDecoration: 'none' }}>About</Link></li>
        <li><Link to='/our-vision' style={{ textDecoration: 'none' }}>Our Vision</Link></li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        
        <li onClick={toggleMoreDropdown} style={{ position: 'relative'  }}>
          Products
          {moreDropdownVisible && (
            <ul className="more-dropdown">
            <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
              <li><Link to='/mobiles' style={{ textDecoration: 'none' }}>Mobiles</Link></li>
              <li><Link to='/laptops' style={{ textDecoration: 'none' }}>Laptops</Link></li>
              <li><Link to='/televisions' style={{ textDecoration: 'none' }}>Televisions</Link></li>
              <li><Link to='/refrigerators' style={{ textDecoration: 'none' }}>Refrigerators</Link></li>
              <li><Link to='/washingmachines' style={{ textDecoration: 'none' }}>Washing Machines</Link></li>
              <li><Link to='/smartwatches' style={{ textDecoration: 'none' }}>Smart Watches</Link></li>
            </ul>
          )}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Logout</button>
        :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
        <Link to="/cart"><FiShoppingCart style={{color: "white"}} size={28} /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
