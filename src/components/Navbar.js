import React from "react";
import "./Navbar.css";
import { CartWidget } from "./CartWidget";
import logo from '../assets/logo.png';

export const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="menu">
            <div className="brand">
              <img src= {logo} alt="logo" />
            </div>
            <div className="links">
              <a href="#">Categorias</a>
              <a href="#">Ofertas</a>
              <a href="#">Ayuda</a>
            </div>
          </div>
          <div className="compra">
            <button className="carrito">
            <CartWidget />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
