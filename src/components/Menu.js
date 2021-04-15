import React from 'react'
import logo from '../assets/book.png'

import 'bootstrap/dist/css/bootstrap.css';

 export const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand">
                    <img src={logo} />
                    La Casa del Papel</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"     data-target="Navbar" aria-controls="Navbar" aria-expanded="false" aria-label="Toggle    navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link">Inicio
                            <span className="sr-only">(Inicio)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Categorias</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Ofertas</a>
                    </li>
                    </ul>
                    <form className="form-inline">
                        <div className="md-form my-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar"/>
                            <button type="button" className="btn btn-success">Buscar</button>
                        </div>
                    </form>
                    </div>
                </nav>
            
        </>
    )
}
