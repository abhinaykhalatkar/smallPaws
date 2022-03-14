import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export default function Button(props) {
  return (
    props.currentVal?
    <Link to={props.linkId}>
      <button className='btn__67' onClick={()=>{
        props.onChange(false)
      }}>{props.btnName}</button>
    </Link>
    :
    <Link to={props.linkId}>
    <button className='btn__67'>{props.btnName}</button>
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
