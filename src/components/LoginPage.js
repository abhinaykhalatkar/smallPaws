import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import "../App.css";
import {auth} from "../config/firebase.config";
function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App container">
      <div>
        <h3> Register User </h3>
        <input className="form-control" style={{marginBottom: 10}}
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input className="form-control" style={{marginBottom: 10}}
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register} className="btn btn-primary"> Create User</button>
      </div>

      <div>
        <h3 style={{marginTop:20}}> Already a User? </h3>
        <input className="form-control" style={{marginBottom: 10}}
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input className="form-control" style={{marginBottom: 10}}
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login} className="btn btn-primary"> Login</button>
      </div>

      <h4 style={{marginTop:30}}> User Logged In: </h4>
      {user?.email}

      <button onClick={logout} className="btn btn-primary"> Sign Out </button>
    </div>
  );
}

export default App;