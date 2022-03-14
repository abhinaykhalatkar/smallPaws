import './App.css';
import Navbar from './components/Navbar/Navbar';
import {useState} from "react";
import LoginPage from './Pages/LoginPage/LoginPage';
import AdoptionCenter from './Pages/AdoptionCenter/AdoptionCenter';
import AdoptionDetailsForm from './Pages/AdoptionDetailsForm/AdoptionDetailsForm';
import {
  Routes,
  Route,
} from "react-router-dom";
import DayCareServices from './Pages/DayCareServices/DayCareServices';
import Home from "./Pages/Home/Home";
import VetServices from "./Pages/VetService/VetService";
import AboutUs from './Pages/AboutUs/AboutUs';
import HelpUs from './Pages/HelpUs/HelpUs';
import AdoptionProcess from './Pages/AdoptionProcess/AdoptionProcess';
import data from './components/Data/Data';


function App() {
const [isUserLoggedIn,setUserLoggedIn]=useState(false);
const [userEmail,setUserEmail]=useState("");
const [userLocalId,setLoaclId]=useState("");
const [userResitered,setUserRegistered]=useState(false);
const [loadedPetsData,setLoadedPetData]=useState(data.petList);

  return (
    
    <div className="App">
      {console.log(loadedPetsData)}
      {console.log(isUserLoggedIn,userEmail,userLocalId,userResitered)}
      <Navbar isUserLoggedIn={isUserLoggedIn} onChange={(val)=>{
            setUserLoggedIn(val.userLoggedIn);
            setUserEmail("");
            setLoaclId("");
            setUserRegistered(false)
          }}/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/loginPage"  element={<LoginPage
           loginToken={[isUserLoggedIn,userEmail,userLocalId,userResitered]}
           onChange={(val)=>{
            setUserLoggedIn(val.userLoggedIn);
            setUserEmail(val.setUserEmail);
            setLoaclId(val.setLocalId);
            setUserRegistered(val.setUserRegistered)
          }}/>}/>   
          <Route path="/dayCareServices" element={<DayCareServices/>}/>
          <Route path="/adoptionCenter" element={<AdoptionCenter isLoggedIn={isUserLoggedIn} loadedPetsData={loadedPetsData}/>}/>
          <Route path="/adoptionDetailsForm" element={<AdoptionDetailsForm 
           onChange={(newData)=>{
            setLoadedPetData([...loadedPetsData,newData])
           }} />}/>
          <Route path="/vetServices"  element={<VetServices/>}/>
          <Route path="/helpUs"  element={<HelpUs/>}/>
          <Route path="/aboutUs"  element={<AboutUs/>}/>
          <Route path="/adoptionProcess"  element={<AdoptionProcess/>}/>
        </Routes>    
    </div>
  );
}

export default App;
