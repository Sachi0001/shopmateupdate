import {Link, NavLink} from "react-router-dom"

import Logo from '../images/logo.jpg'

import './header.css'
import { useCart } from "../context/CartContext"

export const Header = () => {
  const { cartlist } = useCart();
  return (
    <header>
      <Link  to="/" className='logo'>
        <img src={Logo} alt="falcon logo" />
        <span >Shopmate</span>
      </Link>
      <nav className='navigation'>
        <NavLink to='/' className="link" end>
Home
        </NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className='items'>cartlist:{cartlist.length}</Link>
      </header>
  )
}
