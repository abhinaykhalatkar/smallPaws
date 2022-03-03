import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav>
        <Link to={`/`}>
          <img src={'/assets/logo.svg'} alt="logo" />
        </Link>
        <div className="navBar">
          {/* <NavLink to="/">Home</NavLink> */}
          {/* <NavLink to="/adoptionCenter">Adoption</NavLink> */}
          <NavDropdown title="Adoption" id="basic-nav-dropdown">
            <NavDropdown.Item><NavLink to="/adoptionCenter">- Adopt a pet</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink to="/adoptionDetailsForm">- Put a pet for adoption</NavLink></NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Services">
            <NavDropdown.Item><NavLink to="/dayCareServices">- Day care</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink to="/dayCareServices">- Adoption process</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink to="/dayCareServices">- Vet service</NavLink></NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Help Us">
            <NavDropdown.Item><NavLink to="/">- Donate</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink to="/">- Volunteer</NavLink></NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="About Us">
            <NavDropdown.Item><NavLink to="/">- Achivements</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink to="/">- Contact us</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink to="/">- Our expertise</NavLink></NavDropdown.Item>
          </NavDropdown>
        </div>
        <NavLink to="/loginPage">
          Sign in / Sign Up
        </NavLink>
      </nav>
    </div>
  )
}

export default Header;