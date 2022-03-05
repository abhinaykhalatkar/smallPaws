import React from 'react'
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div>
    <nav>
    <NavLink to="/">
    <img src= {'/assets/logo.svg'} alt="logo"/>
        </NavLink>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/adoptionCenter">Adoption</NavLink>
        <NavLink to="/dayCareServices">Services</NavLink>
        <NavLink to="/helpUs">Help Us</NavLink>
        <NavLink to="/aboutUs">About Us</NavLink>
        <NavLink to="/loginPage">
        Sign in / Sign Up
        </NavLink>
      </nav>
    </div>
  )
}

export default Header;