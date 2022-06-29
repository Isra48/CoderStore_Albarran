import React from "react";
import "./NavBar.css";
import logoch from "../assets/ch.png";
import Cw from "./cartwidget";
import hamburguernav from "../assets/hamburguernavicon.png";

function Navbar() {
  return (
    <div className="masternavbar">
      {/* Navabar Desktop */}
      <div className="navbar">
        <div className="containerlogo">
          <a href="" className="logonavbar">
            {" "}
            <img className="logoch" src={logoch} alt="Logo Coder House" />{" "}
          </a>
        </div>

        <div className="itemsnavbar">
          <a href="" className="textnavbar">
            {" "}
            Inicio{" "}
          </a>
          <a href="" className="textnavbar">
            Shop
          </a>
          <a href="" className="textnavbar">
            Nosotros
          </a>
          <a href="" className="textnavbar">
            Contacto
          </a>
          <Cw />
        </div>
      </div>

      {/* Navbar responsive */}
      {/*  */}
      <div className="navbar2">
        <div className="containerlogo2">
          <a href="" className="logonavbar2">
            {" "}
            <img className="logoch" src={logoch} alt="Logo Coder House" />{" "}
          </a>
        </div>
        <div className="containerbtns">
          <Cw />
          <a href="" className="hamburgerNav">
            <img
              className="hamburguerimg"
              src={hamburguernav}
              alt="Menu de hamburguesa"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
