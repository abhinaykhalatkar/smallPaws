import React from 'react'
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div>
    <nav>
        <img src= {'/assets/logo.svg'} alt=""/>
        <NavLink to="/adoptionCenter">Adoption</NavLink>
        <NavLink to="/dayCareServices">Services</NavLink>
        <NavLink to="/">Help Us</NavLink>
        <NavLink to="/">About Us</NavLink>
        <NavLink to="/loginPage">
        Sign in / Sign Up
        </NavLink>
      </nav>
      {/* <div className="circle">
        <img src= {'/assets/circle.svg'}/>
      </div> */}
    </div>
  )
}

export default Header;