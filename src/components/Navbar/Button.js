import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export default function Button() {
  return (
    <Link to='sign-up'>
      <button className='btn__67'>Sign Up</button>
    </Link>
  );
}


// import React from "react";
// import { Link } from "react-router-dom";
// import "./Button.css";

// function Button() {
//   return (
//     <Link to="/loginPage">
//       <button className="btn__2">Sign Up/Log In</button>
//     </Link>
//   );
// }

// export default Button;
