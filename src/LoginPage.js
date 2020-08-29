import React from "react";
import { Button } from "@material-ui/core";
import "./LoginPage.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function LoginPage() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    //sing in...
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="loginPage">
      <div className="loginPage__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png"
          alt=""
          className="loginPage__fbLogo"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
          className="loginPage__fbLogo"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default LoginPage;
