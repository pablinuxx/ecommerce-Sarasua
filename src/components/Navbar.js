import React from 'react'
import  './Navbar.css'
import {CartWidget} from './CartWidget'

 export const Navbar = () => {
    return (
        <>
          <ul className="menu">
                        <li>
                            <a>Inicio</a>
                        </li>
                        <li>
                          <a>Productos</a>
                        </li>
                        <li>
                         <a>Servicios</a>
                        </li>
                        <li>
                         <a>Acerca de</a>
                        </li>
                        <li>
                         <a>Contacto</a>
                        </li>                             
                        <li>
                        <a><CartWidget /></a>                   
                        </li>
                    </ul>
                    
        </>
    )
}
