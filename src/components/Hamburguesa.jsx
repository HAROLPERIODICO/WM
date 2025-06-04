import React, { useState } from "react";

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    
           <button
            className="text-2xl md:hidden"
            id="menu-toggle"
            aria-label="Abrir menú"
          >
            &#9776;
          </button>

     
          <nav
            className={`${
              menuAbierto ? "block" : "hidden"
            } md:flex space-x-6`}
            id="nav"
          >
            <ul className="flex flex-col md:flex-row space-x-4" id="menu">
              <li>
                <a href="                                                
                  Indicadores
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-yellow-400">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="                                           
                  Estatus
                </a>
              </li>
              <li>
                <a href="#programacion" className="hover:text-yellow-400">
                  Programación
                </a>
              </li>
              <li>
                <a href="                                       
                  RE
                </a>
              </li>
              <li>
                <a href="#backlog" className="hover:text-yellow-400">
                  BACKLOG
                </a>
              </li>
              <li>
                <a href="#inspecciones" className="hover:text-yellow-400">
                  Inspecciones
                </a>
              </li>
            </ul>
          </nav>
        );
      };

export default Header;
