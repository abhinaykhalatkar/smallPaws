import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu__67 clicked' : 'dropdown-menu__67'}
      >
        {MenuItems[props.dropdownNum].map((item, index) => {
          return (
            <li key={props.dropdownNum+index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;


// import React, { useState } from "react";
// import { adoptionDropdown,serviceDropdown,helpUsDropdown,AboutUsDropdown } from "./NavItems";
// import { Link } from "react-router-dom";
// import "./Dropdown.css";

// const Dropdown= (props) => {
//   const [dropdown, setDropdown] = useState(false);
//   let dropDownArray=[props.dropDownTitleCode==="Adoption"?adoptionDropdown:props.dropDownTitleCode==="Services"?serviceDropdown:props.dropDownTitleCode==="Help-Us"?helpUsDropdown:AboutUsDropdown]
//   // dropdown ? "services-submenu clicked" : "services-submenu"
// //{!dropdown?"services-submenu":()=>{if (props.Dropdown==="Services"){return dropdown ? "services-submenu clicked" : "services-submenu"}}}
//   return (
//     <>
//       <ul
//         className={dropdown?props.dropDownName+"-submenu clicked":props.dropDownName+"-submenu"}
//         onClick={() => setDropdown(!dropdown)}
//       >
        
//         {dropDownArray.map((item) => {
//           return (
//             <li key={item.title+item.id}>
//               <Link
//                 to={item.path}
//                 className={item.cName}
//                 onClick={() => setDropdown(false)}
//               >
//                 {item.title}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// export default Dropdown;
