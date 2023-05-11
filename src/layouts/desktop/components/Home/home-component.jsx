import React, { useState } from "react";

import Logo from "./logo.png";
import Arrow from "./Arrow.png";
import World from "./World.png";
import EspIcon from "./esp.png";
import EngIcon from "./eng.png";
import "../Home/home-component.styl";

export default function Home() {
  const [rotate, setRotate] = useState(false);

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="lis-nav">
          <ul className="list-menu">
            <li>
              <a className="opcion-menu" href="#">
                Inicio
              </a>
            </li>

            <li>
              <a className="opcion-menu" href="#">
                Sobre Nosotros
              </a>
            </li>

            <li>
              <a className="opcion-menu" href="#">
                Equipo
              </a>
            </li>
            <li>
              <a className="opcion-menu" href="#">
                Servicios
              </a>
            </li>
            <li>
              <a className="opcion-menu" href="#">
                Contactanos
              </a>
            </li>
          </ul>
        </div>

        <div className="hover-rotate">
          <li class="dropdown dropdown-2">
            <img id="img-world" src={World} alt="world" />
            IDIOMA
            <img className="arrow-idioma" src={Arrow} alt="" />
            <ul class="dropdown_menu dropdown_menu-2">
              <li id="boton-esp" class="dropdown_item-1">
                <div className="botones-idiomas">
                  <img id="icono-idioma" src={EspIcon} alt="" />
                  <p>ESPAÑOL</p>
                </div>
              </li>
              <li id="boton-ing" class="dropdown_item-2">
                <div className="botones-idiomas">
                  <img id="icono-idioma" src={EngIcon} alt="" />
                  <p>INGLES</p>
                </div>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </div>
  );
}
