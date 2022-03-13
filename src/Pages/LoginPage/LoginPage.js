import { useState } from "react";
import { Box } from "@mui/system";
import { GoogleLogin } from "react-google-login";
import { TextField } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./LoginPage.css";
import { auth } from "../../config/firebase.config";
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
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div className="loginFlex">
      <div className="loginBox">
        <div className="loginContent">
          <div className="googleSingIn">
            <GoogleLogin
              clientId="729062511418-nfed3ktuohvrnlvejgsmrm9bu9k3ri7r.apps.googleusercontent.com"
              buttonText="Sing up using Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              style={{ width: 192, height: 48 }}
            />
          </div>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <h2 className="login-heading"> Register </h2>

            <div className="loginPage">
              <TextField
                label="Email"
                placeholder="Enter email address"
                variant="standard"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
              />
            </div>
            <div className="loginPage">
              <TextField
                label="Username"
                placeholder="Enter username"
                variant="standard"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
              />
            </div>
            <div className="loginPage">
              <TextField
                label="Password"
                placeholder="Enter password"
                variant="standard"
                type="password"
                autoComplete="off"
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
              />
            </div>
            <div className="loginButton">
              <button onClick={register} className="btn-login">
                {" "}
                Register{" "}
              </button>
            </div>
          </Box>
        </div>
      </div>

      <div className="loginBox2">
        <div className="loginContent">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <h2 className="login-heading"> Login </h2>
            <div className="loginPage">
              <TextField
                label="Username"
                placeholder="Enter username"
                variant="standard"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
              />
            </div>
            <div className="loginPage">
              <TextField
                label="Password"
                placeholder="Enter password"
                variant="standard"
                type="password"
                autoComplete="off"
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
              />
            </div>
            <div className="loginButton">
              <button onClick={register} className="btn-login">
                {" "}
                Login
              </button>
            </div>
          </Box>
        </div>
      </div>

      <div className="login-bg-shape">
        <img src={"/assets/backImage.jpeg"} alt="" className="login-shape" />
      </div>
    </div>
  );
}

export default App;
