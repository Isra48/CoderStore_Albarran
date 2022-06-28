import React from "react";
import "./NavBar.css";
import logoch from "../assets/ch.png";
import Cw from "./cartwidget";
import hamburguernav from "../assets/hamburguernavicon.png";

function Navbar() {
  return (
    <div className="masternavbar">
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

      {/* Aqui inicia el menu responsive */}
      <div className="navbar2">
        <div className="containerlogo">
          <a href="" className="logonavbar">
            {" "}
            <img className="logoch" src={logoch} alt="Logo Coder House" />{" "}
          </a>
        </div>
        <div className="hamburguer-bag">
          <Cw />
          <img
            className="hamburguernav"
            src={hamburguernav}
            alt="Menu de hamburguesa"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
