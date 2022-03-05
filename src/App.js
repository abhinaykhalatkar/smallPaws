import './App.css';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import AdoptionCenter from './components/AdoptionCenter/AdoptionCenter';
import AdoptionDetailsForm from './components/AdoptionDetailsForm/AdoptionDetailsForm';
import {
  Routes,
  Route,
} from "react-router-dom";
import DayCareServices from './components/DayCareServices';
import Home from "./components/Home/Home";
import VetServices from "./components/VetService/VetService";
import AboutUs from './components/AboutUs/AboutUs';
import HelpUs from './components/HelpUs/HelpUs';


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
        <Route path="/" exact element={<Home/>}/>
          <Route path="/loginPage" element={<LoginPage/>}/>   
          <Route path="/dayCareServices" element={<DayCareServices/>}/>
          <Route path="/adoptionCenter" element={<AdoptionCenter/>}/>
          <Route path="/adoptionDetailsForm" element={<AdoptionDetailsForm/>}/>
          <Route path="/vetServices"  element={<VetServices/>}/>
          <Route path="/helpus"  element={<HelpUs/>}/>
          <Route path="/aboutUs"  element={<AboutUs/>}/>
        </Routes>    
    </div>
  );
}

export default App;
