import React from "react";
import "./Header.sass";

function Header() {
  return (
    <div className="header">
      <p className="header__description">
        There have 2 options the image load.
        <strong> Click in the box</strong>, or
        <strong> drag the image at the box</strong>
      </p>
    </div>
  );
}

export default Header;
