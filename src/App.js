import './App.css';
import Header from './components/Header/Header';
import LoginPage from './components/LoginPage';
import AdoptionCenter from './components/AdoptionCenter/AdoptionCenter';
import AdoptionDetailsForm from './components/AdoptionDetailsForm/AdoptionDetailsForm';
import {Routes, Route } from "react-router-dom";
import DayCareServices from './components/DayCareServices';
import Home from "./components/Home/Home";
import AboutusContainer from './components/aboutus/aboutusContainer';
import Helpuscontainer from './components/helpus/helpuscontainer';

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
          <Route path="/Home" element={<Home/>}/>
          <Route path="/aboutus" element={<AboutusContainer/>}/>   
          <Route path="/helpus" element={<Helpuscontainer/>}/> 

        </Routes>    
    </div>
  );
}

export default App;
