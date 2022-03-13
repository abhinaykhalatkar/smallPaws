import { useState, useEffect } from "react";
import PopupCard from "../../components/PopupCard/PopupCard";
import axios from "axios";
import PetCard from "./PetCard";
import "./AdoptionCenter.css";
import SimpleBackdrop from "../../components/Backdrop/Backdrop";

// export function CounterValue(){
//   const [isPopupCounter, setPopupCounterValue]= useState(counter.counterVal);
//   return isPopupCounter
// }
export default function AdoptionCenter() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPetsData, setLoadedPetData] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cardId,setCardId]=useState(null);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        return res;
      })
      .then((res) => {
        setIsLoading(false);
        setLoadedPetData(res.data.splice(0, 10));
      })
      .catch((error) => {
        return <div>Not loaded...</div>;
      });
  }, []);

  if (isLoading) {
    return <SimpleBackdrop loaderAnimation={true} />;
  }
  return (
    <div className="container__AdCen">
      <div className="petDisplayModule">
        <h1 className="heading">Adoption Center</h1>
        <div className="locationPicker">
          <div>
            <label htmlFor="locationInput">Select City</label>
            <select name="locationInput" id="city">
              <option value="Heidelbirg">Heidelbirg</option>
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
                  petCardDetails={[index, el.id, el.url, el.title]}
                />
              </div>
            );
          })}
        </div>
        {isPopupOpen ?
          <PopupCard   petDetails={[loadedPetsData[cardId]]}  onChange={(val)=>setIsPopupOpen(val)} />
        : null}
      </div>
    </div>
  );
}
