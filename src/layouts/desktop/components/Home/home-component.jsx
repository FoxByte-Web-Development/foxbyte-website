import React, { useState } from "react";
import Logo from "./logo.png";
import World from "./World.png";
import "../Home/home-component.css";

export default function Home() {
  const [dropDownStatus, setDropDonwStatus] = useState(false);

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="lis-nav">
          <li className="lista-nav">
            <ul className="opciones-nav">INICIO </ul>
            <ul id="ul-sobrenosotros" className="opciones-nav">
              {" "}
              SOBRE NOSOTROS{" "}
            </ul>
            <ul className="opciones-nav"> EQUIPO </ul>
            <ul className="opciones-nav"> SERVICIOS </ul>
            <ul className="opciones-nav"> CONTACTANOS</ul>
          </li>
        </div>

        <div className="boton-idioma flex flex-col">
          <button
            onClick={() => setDropDonwStatus(prev => !prev)}
            id="texto-idioma-container"
          >
            <img id="mundito" src={World}></img>

            <p id="texto-idioma">IDIOMA</p>
          </button>

          {dropDownStatus && (
            <ul className="lista-idioma flex flex-col gap-2">
              <li>ESPAÑOL</li>
              <li>INGLES</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
