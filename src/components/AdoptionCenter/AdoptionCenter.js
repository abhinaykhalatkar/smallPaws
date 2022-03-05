import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PetCard from "./PetCard";

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
        setLoadedPetData(res.data.splice(0,20));
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
    <div>
      <div className="locationDialog">
        <label htmlFor="locationInput">Select City</label>
        <select name="citySelect" id="city">
          <option value="Heidelbirg">Heidelbirg</option>
          <option value="Mannheim">Mannheim</option>
        </select>
        <NavLink to="/adoptionDetailsForm">
          Need to put pet for adoption?
        </NavLink>
        <div className="petDisplayModule">
          <PetCard petTemplateData={loadedPetsData} />
        </div>
      </div>
    </div>
  );
}
