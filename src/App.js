import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header';
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


function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/loginPage" element={<LoginPage/>}/>   
          <Route path="/dayCareServices" element={<DayCareServices/>}/>
          <Route path="/adoptionCenter" element={<AdoptionCenter/>}/>
          <Route path="/adoptionDetailsForm" element={<AdoptionDetailsForm/>}/>
          <Route path="/vetServices"  element={<VetServices/>}/>
          <Route path="/helpus"  element={<HelpUs/>}/>
          <Route path="/aboutUs"  element={<AboutUs/>}/>
          <Route path="/adoptionProcess"  element={<AdoptionProcess/>}/>
        </Routes>    
    </div>
  );
}

export default App;
