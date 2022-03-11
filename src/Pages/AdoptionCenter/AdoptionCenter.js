import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PetCard from "./PetCard";
import "./AdoptionCenter.css"

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
        setLoadedPetData(res.data.splice(0, 20));
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
    <div className="container">
      <div className="d-lg-flex">
        {loadedPetsData.map((card)=>{
return(<PetCard key={card.id} 
  petTemplateData={[card.id%2===0?"DOG":"CAT",card.url,(Math.random())<0.5?"Stray":"Pet"]}
  />)

        })}
      </div>
    </div>
  </div>
    // <div>
    //     <div className="div1">
    //     <NavLink to="/adoptionDetailsForm">Need to put pet for adoption?</NavLink>
    //     </div>

 
    //     <div className="petDisplayModule">
    //     <h1 className="heading">Adoption Center</h1>
    //     <div className="locationPicker">
    //         <div>
    //         <label htmlFor="locationInput">Select City</label>
    //       <select name="locationInput" id="city">
    //         <option value="Heidelbirg">Heidelbirg</option>
    //         <option value="Mannheim">Mannheim</option>
    //       </select>
    //         </div>
    //     </div>
    //       <PetCard petTemplateData={loadedPetsData} />
    //     </div>
    // </div>
  );
}
