import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'
import "./header.styles.scss"
import {ReactComponent as Icon} from "../../assets/icons/crown.svg"
const Header = () => {
  return (
        <>
        <div className='navigation'>
        <div className='logo-container'><NavLink to='/'><Icon /></NavLink></div>
        <div className='nav-links-container'>
        <NavLink className='nav-link' to="/shop">Shop</NavLink>
        {/* <NavLink >Contact</NavLink> */}
        <NavLink className='nav-link' to="/auth" >Sign-In</NavLink>
        {/* <NavLink >Cart</NavLink> */}
        </div>
        </div>
    <div>{<Outlet />}</div>
    </>
    
  )
}

export default Header