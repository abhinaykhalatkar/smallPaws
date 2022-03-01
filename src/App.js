import './App.css';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import DayCareServices from './components/DayCareServices';

function App() {
  return (
    <div className="App">
      <Header/>
     
        <Routes>
          <Route path="/loginPage" element={<LoginPage/>}/>   
          <Route path="/dayCareServices" element={<DayCareServices/>}/>
        

        </Routes>    

    </div>
  );
}

export default App;
