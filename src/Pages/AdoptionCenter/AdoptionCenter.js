import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PetCard from "./PetCard";
import "./AdoptionCenter.css";

export default function AdoptionCenter() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPetsData, setLoadedPetData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        return res;
      })
      .then((res) => {
        setIsLoading(false);
        setLoadedPetData(res.data.splice(0, 30));
      })
      .catch((error) => {
        return <div>Not loaded...</div>;
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
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
        {loadedPetsData.map((el, ind) => {
          return (
            <PetCard
              petCardDetails={[ind, el.id, el.url, el.title]}
              key={ind}
            />
          );
        })}
      </div>
      </div>
    </div>
  );
}

