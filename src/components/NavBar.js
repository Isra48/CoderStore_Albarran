import React from "react";
import "./NavBar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="containerlogo">
        <a href="" className="logonavbar">
          {" "}
          logo{" "}
        </a>
      </div>
      <div className="componentsnavbar">
        <a href="" className="textnavbar">
          {" "}
          Shop{" "}
        </a>
        <a href="" className="textnavbar">
          {" "}
          nosotros{" "}
        </a>
      </div>
    </div>
  );
}

export default Navbar;
