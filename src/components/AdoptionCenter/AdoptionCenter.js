import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PetCard from "./PetCard";

export default function AdoptionCenter(){
    const [isLoading, setIsLoading]=useState(true);
    const [loadedPetsData, setLoadedPetData]= useState([]);
    
    useEffect(()=>{
        setIsLoading(true);

        axios.get("https://jsonplaceholder.typicode.com/photos")
    .then((res)=>{
        return res
    }).then((res)=>{
        setIsLoading(false);
        setLoadedPetData(res.data);
    })
    .catch((error)=>{
        return(
            <div>Not loaded...</div>
        );  
    })
    }
    ,[]);


    if (isLoading){
        return <section>
            <p>Loading...</p>
        </section>
    }
    return(
        <div>
            <div className="locationDialog">
            <label htmlFor="locationInput">My Input</label>
            <input id="locationInput" type="text" />
            <NavLink  to="/adoptionDetailsForm">Need to put pet for adoption?</NavLink>
            <div className="petDisplayModule">
            <PetCard petTemplateData={loadedPetsData}/>
            </div>
            </div>
        </div>

    );  

    
}