import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    
      <nav className="navbar__2">
        <Link to="/" className="navbar-logo__2">
          <img src= {'/assets/logo.svg'} alt="logo"/>
        </Link>
        <ul className="nav-items__2">
          {navItems.map((item) => {
            if (item.title === "Services") {
              let pathLoc=item.path==="none"?<h3>{item.title}</h3>:<Link to={item.path}>{item.title}</Link>;
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  {pathLoc};
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Button />
      </nav>
  );
}

export default Navbar;
