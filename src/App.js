import './App.css';
import { NavLink } from "react-router-dom";
import AboutusContainer from './aboutus/aboutusContainer';

function App() {
  return (
    <div className="App">
      <nav>
        <img src= {'/assets/logo.svg'}/>
        <NavLink to="/">Adoption</NavLink>
        <NavLink to="/">Services</NavLink>
        <NavLink to="/">Help Us</NavLink>
        <NavLink to="/">About Us</NavLink>
        <NavLink to="/">Signin / Login</NavLink>
      </nav>
      <AboutusContainer />
      <div className="circle">
        <img src= {'/assets/circle.svg'}/>
      </div>
    </div>
  );
}

export default App;
