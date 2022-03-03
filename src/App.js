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


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/loginPage" element={<LoginPage/>}/>   
          <Route path="/dayCareServices" element={<DayCareServices/>}/>
          <Route path="/adoptionCenter" element={<AdoptionCenter/>}/>
          <Route path="/adoptionDetailsForm" element={<AdoptionDetailsForm/>}/>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/loginPage" element={<LoginPage/>}/>   
        </Routes>    
    </div>
  );
}

export default App;
