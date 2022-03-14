
import axios from "axios";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import "../App.css";
import "./LoginPage.css";
// import fire from "../../config/firebaseDatabse.config";
import { auth } from "../../config/firebase.config";
function LoginPage(props) {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      axios.get("https://ui-ux-dumbledore-team-default-rtdb.europe-west1.firebasedatabase.app/petList")
      // axios.post("https://smallpaws-7f7f8-default-rtdb.europe-west1.firebasedatabase.app/userList",{[user._tokenResponse.localId]:user._tokenResponse.email});
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
      props.onChange({
        userLoggedIn:user._tokenResponse?true:false,
        setUserEmail:user._tokenResponse.email,
        setLocalId:user._tokenResponse.localId,
        setUserRegistered:user._tokenResponse.registered?true:false
      })
      axios.get("https://ui-ux-dumbledore-team-default-rtdb.europe-west1.firebasedatabase.app/petList")
      .then((res)=>{
        console.log(res);
      })
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App" style={{display: 'flex',justifyContent: 'space-around',backgroundImage: 'url(/assets/backImage.jpeg)',width: '100%', height: '100vh',alignItems:'center',backgroundSize: 'cover'}}>
      <div style ={{display:'flex',flexDirection:'column',maxWidth:'400px',background:'white',padding:'50px',justifyContent:'center',alignItems:'center',maxHeight: '500px' }}>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          style={{margin:10}}
          className="form-control form-control-lg"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          style={{margin:10}}
          className="form-control form-control-lg"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register} className="btn btn-primary btn-lg btn-block" style={{margin:10}}> Create User</button>
        <button className="btn btn-lg btn-block btn-primary" style={{backgroundColor: "#dd4b39",margin:10}} onClick={signInWithGoogle}><i className="fa fa-google me-2"></i> Sign in with google</button>
        
      </div>

      <div style ={{display:'flex',flexDirection:'column',maxWidth:'400px',background:'white',padding:'50px',justifyContent:'center',alignItems:'center',maxHeight: '500px'}}>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          style={{margin:10}}
          className="form-control form-control-lg"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          style={{margin:10}}
          className="form-control form-control-lg"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login} className="btn btn-primary btn-lg btn-block" style={{margin:10}}> Login</button>
      </div>

      {/* <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button> */}
{/* 
      <div className="login-bg-shape">
        <img src={"/assets/backImage.jpeg"} alt="" className="login-shape" />
      </div> */}
    </div>
  );
}

export default LoginPage;
