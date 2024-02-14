import React,{useContext} from 'react'
import { Outlet,NavLink } from 'react-router-dom'
import "./header.styles.scss"
import {ReactComponent as Icon} from "../../assets/icons/crown.svg"
import { UserContext } from '../../context/User/UserContext'
import { userSignOut } from '../../utils/firebase/firebase.util'
const Header = () => {
  const {user} = useContext(UserContext)
  return (
        <>
        <div className='navigation'>
        <div className='logo-container'><NavLink to='/'><Icon /></NavLink></div>
        <div className='nav-links-container'>
        <NavLink className='nav-link' to="/shop">Shop</NavLink>
        
        {user?<NavLink className='nav-link' onClick={()=>userSignOut()}>Sign Out</NavLink>:<NavLink className='nav-link' to="/auth" >Sign-In</NavLink>}
  
        </div>
        </div>
    <div>{<Outlet />}</div>
    </>
    
  )
}

export default Header