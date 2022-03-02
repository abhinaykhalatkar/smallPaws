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

function App() {
  return (
    <div className="App">
      <Header/>
     
        <Routes>
        <Route path="/" exact element={<DayCareServices/>}/>
          <Route path="/loginPage" element={<LoginPage/>}/>   
          <Route path="/dayCareServices" element={<DayCareServices/>}/>
          <Route path="/adoptionCenter" element={<AdoptionCenter/>}/>
          <Route path="/adoptionDetailsForm" element={<AdoptionDetailsForm/>}/>
        </Routes>    

    </div>
  );
}

export default App;
