import './App.css';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
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
          <Route path="/Home" element={<Home/>}/>
          <Route path="/loginPage" element={<LoginPage/>}/>   
          <Route path="/dayCareServices" element={<DayCareServices/>}/>
        </Routes>    
    </div>
  );
}

export default App;
