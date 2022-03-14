import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

import Button from "./Button";
import Dropdown from "./Dropdown";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (num) => {
    if (window.innerWidth < 960) {
      num===1?setDropdown1(false):num===2?setDropdown2(false):num===3?setDropdown3(false):setDropdown4(false)
      
    } else {
      num===1?setDropdown1(true):num===2?setDropdown2(true):num===3?setDropdown3(true):setDropdown4(true)
    }
  };

  const onMouseLeave = (num) => {
    if (window.innerWidth < 960) {
      num===1?setDropdown1(false):num===2?setDropdown2(false):num===3?setDropdown3(false):setDropdown4(false)
      
    } else {
      num===1?setDropdown1(false):num===2?setDropdown2(false):num===3?setDropdown3(false):setDropdown4(false)
    }
  };

  return (
    <>
      <nav className='navbar__67'>
        <Link to='/' className='navbar-logo__67' onClick={closeMobileMenu}>
        <img className='fab fa-firstdraft' src= {'/assets/whiteLogo.svg'} alt="logo"/>
        </Link>
        <div className='menu-icon__67' onClick={handleClick}>
        <img className={click ? 'fas fa-times' : 'fas fa-bars'} src= {'/assets/logo.svg'} alt="logo"/>
        </div>
        <ul className={click ? 'nav-menu__67 active' : 'nav-menu__67'}>
          <li className='nav-item__67'>
            <Link to='/' className='nav-links__68'  onClick={closeMobileMenu}>
              <p className='nav-links__67'>Home</p>
            </Link>
          </li>
          <li
            className='nav-item__67'
            onMouseEnter={()=>onMouseEnter(1)}
            onMouseLeave={()=>onMouseLeave(1)}
          >
            <p
              
              className='nav-links__67'
              onClick={closeMobileMenu}
            >
              Adoption 
            </p>
            {dropdown && <Dropdown dropdownNum={0}/>}
          </li>
          <li
            className='nav-item__67'
            onMouseEnter={()=>onMouseEnter(2)}
            onMouseLeave={()=>onMouseLeave(2)}
          >
            <p
              
              className='nav-links__67'
              onClick={closeMobileMenu}
            >
              Services 
            </p>
            {dropdown2 && <Dropdown dropdownNum={1}/>}
          </li>
          <li
            className='nav-item__67'
            onMouseEnter={()=>onMouseEnter(3)}
            onMouseLeave={()=>onMouseLeave(3)}
          >
            <p
              
              className='nav-links__67'
              onClick={closeMobileMenu}
            >
              Help Us 
            </p>
            {dropdown3 && <Dropdown dropdownNum={2}/>}
          </li>
          <li
            className='nav-item__67'
            onMouseEnter={()=>onMouseEnter(4)}
            onMouseLeave={()=>onMouseLeave(4)}
          >
            <p
              
              className='nav-links__67'
              onClick={closeMobileMenu}
            >
              About Us 
            </p>
            {dropdown4 && <Dropdown dropdownNum={3} />}
          </li>
        </ul>
        {props.isUserLoggedIn?<Button linkId={"/"} currentVal={props.isUserLoggedIn}  className="buttonNav" btnName="Log Out" onChange={(val)=>{
          props.onChange(val)
        }}/>:<Button linkId={"/loginPage"} currentVal={props.isUserLoggedIn}  className="buttonNav" btnName="Sign Up/Log In"/>}
        
      </nav>
    </>
  );
}


export default Navbar;
