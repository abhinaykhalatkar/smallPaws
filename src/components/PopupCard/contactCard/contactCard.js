import "./contactCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function ContactCard(props){
let [isLoggedIn,setIsLoggedIn]=useState(props.isLoggedIn);

return(
<div className="contactInfoNL">
{isLoggedIn?props.vetContact?
    <div>
    <p>Contact at: SmallPawsVet@gmail.com</p>
</div>:<div>
    <p>Owner Contact email: {props.contactInfo}</p>
    <p>Contact Us: SmallPaws@gmail.com</p>
</div>:
<div className="contactInfoNL">
<p className="loginTxt">login first to see the contact info
</p>
<Link to='/loginPage'> <h5>Log In</h5></Link>

</div>
}
</div>
)

}