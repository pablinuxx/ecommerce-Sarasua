import React from "react";
import "./Navbar.css";
import { CartWidget } from "./CartWidget";

export const Navbar = () => {
  return (
    <>
      <ul className="menu">
        <li><a className="nav-link">Inicio</a></li>
        <li><a className="nav-link">Productos</a></li>
        <li><a className="nav-link">Servicios</a></li>
        <li><a className="nav-link">Acerca de</a></li>
        <li><a className="nav-link">Contacto</a></li>
        <li><CartWidget /></li>        
      </ul>
    </>
  );
};
