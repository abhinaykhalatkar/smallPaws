import "./contactCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function ContactCard(props){
let [isLoggedIn,setIsLoggedIn]=useState(props.isLoggedIn);

return(
<div className="contactPlate">
{isLoggedIn?<div>
    <p>Owner Contact email: {props.contactInfo}</p>
    <p>Contact Us: SmallPaws@gmail.com</p>
</div>:
<div className="contactInfoNL">
<p>login first to see the contact info</p>
<Link to='/loginPage'> <h3>Log In</h3></Link>
</div>
}
</div>
)

}