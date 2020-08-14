import React from "react";
import logo from "../../../assets/img/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import Svg from "../../../utils/Svg";
import "./Navbar.sass";

function Navbar() {
  const { logout } = useAuth0();

  return (
    <div className="navbar">
      <div className="navbar__image">
        <img className="navbar__image--image" alt="logo" src={logo}></img>
      </div>
      <div className="navbar__title">
        <h1 className="navbar__title--title">LOAD IMAGE</h1>
      </div>
      <div className="navbar__icon">
        <Svg
          click={() => logout()}
          icon="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z
          M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z"/>
        <Svg
          icon="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9
          3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 
          20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36
          2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 
          1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 
          13 12 13s3.5-1.56 3.5-3.5S13.94 6
          12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 
          1.5 1.5S12.83 11 12 11z"/>
      </div>
    </div>
  );
}
export default Navbar;
