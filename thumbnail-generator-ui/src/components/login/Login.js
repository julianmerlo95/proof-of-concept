import React from "react";
import "./Login.sass";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@material-ui/core/Button";
import logo from "../../assets/img/logo.png";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="login">
        <div className="login__container">
          <img className="login__container__image" alt="logo" src={logo}></img>
          <p className="login__container__text">
            <strong>
              Login with just one click on
              <span className="login__container__span"> login</span>. There you
              can register or access your account.
            </strong>
          </p>
          <Button
            onClick={() => loginWithRedirect()}
            style={{ marginTop: "15px", width: "55%" }}
            variant="contained"
            color="secondary">
            Login
          </Button>
        </div>
      </div>
    )
  );
};

export default Login;
