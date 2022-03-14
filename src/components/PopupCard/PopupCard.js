import ContactCard from "./contactCard/contactCard";
import { useState } from "react";
import "./PopupCard.css";
export default function PopupCard(props) {
  let[isContactBtnPressed,setIsContactBtnPressed]=useState(false);

  return (
    <div>
      {console.log(props.petDetails[0])}
      <input
        className="modal-btn__popCard"
        type="checkbox"
        defaultChecked={true}
        id="modal-btn__popCard"
        name="modal-btn__popCard"
      />
      <label
        htmlFor="modal-btn__popCard"
        onClick={() => {
          props.onChange(false);
        }}
      ></label>
      <div className="modal__popCard">
        <div className="modal-wrap__popCard">
          <div className="photoContact">
            {console.log(props.petDetails[0].image)}
            {props.petDetails[0].image?<img src={props.petDetails[0].image} alt="https://via.placeholder.com/150/771796" />:
            <img src="https://via.placeholder.com/150/771796" alt="https://via.placeholder.com/150/771796" />}
            <button className="btn btn-primary"> Contact Us</button>
            <button className="btn btn-warning" onClick={()=>{setIsContactBtnPressed(!isContactBtnPressed)}} >Contact Owner</button>
            {isContactBtnPressed?<ContactCard 
            isLoggedIn={props.isLoggedIn} contactInfo={props.petDetails[0].contact}
            />:null}

          </div>
          <div className="petDetails">
            <h1>{props.petDetails[0].name}</h1>
            <div className="morePetDetails">
              <p>Type : {props.petDetails[0].animal}</p>
              <p>Young : {props.petDetails[0].age} years</p>
              <p>Breed : {props.petDetails[0].breed}</p>
              <p>Color : {props.petDetails[0].color}</p>
              <p>Size : {props.petDetails[0].size} kg</p>
              <p>Coat Length : {props.petDetails[0].coatLength}</p>
              <p>{props.petDetails[0].gender?"Female":"Male"}</p>
              <p>Training : {props.petDetails[0].training}</p>
              <p>Address : {props.petDetails[0].address}</p>
              <p>Vaccination : {props.petDetails[0].vaccination?"yes":"no"}</p>
            </div>
            <h3>Details:</h3>
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
