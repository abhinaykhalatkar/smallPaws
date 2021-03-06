import { useState, useEffect } from "react";
import PopupCard from "../../components/PopupCard/PopupCard";
import axios from "axios";
import PetCard from "./PetCard";
import "./AdoptionCenter.css";
import SimpleBackdrop from "../../components/Backdrop/Backdrop";
import data from "../../components/Data/Data";


export default function AdoptionCenter(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPetsData, setLoadedPetData] = useState(props.loadedPetsData);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cardId,setCardId]=useState(null);
  const [isLoggedIn,setIsLoggedIn]=useState(props.isLoggedIn);

  return (
    <div className="container__AdCen">
      <div className="petDisplayModule">
        <h1 className="heading">Adoption Center</h1>
        <div className="locationPicker">
          <div>
            <label htmlFor="locationInput">Select City</label>
            <select name="locationInput" id="city">
              <option  value="Heidelbirg">Heidelbirg</option>
              <option value="Mannheim">Mannheim</option>
            </select>
          </div>
        </div>
        <div className="petCardBox">
          {loadedPetsData.map((el, index) => {
            return (
              <div className={"petCards"} id={index} key={index} onClick={(event)=>{
                let node=event.target;
                while (node.parentNode) {
                  node = node.parentNode;
                  if (node.className === "petCards")
                      setCardId(node.id);
              }
              setIsPopupOpen(true);
              }}>
                <PetCard
                  petCardDetails={[ el.image, el.name, el.animal,el.breed,el.age]}
                />
              </div>
            );
          })}
        </div>
        {isPopupOpen ?
          <PopupCard isLoggedIn={isLoggedIn}   petDetails={[loadedPetsData[cardId]]}  onChange={(val)=>setIsPopupOpen(val)} />
        : null}
      </div>
    </div>
  );
}
