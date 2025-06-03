// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <>
      {/* Contenedor fijo para logos CHM */}
      <div className="fix top-0 left-0 w-full flex justify-between items-center p-2 bg-white z-20">
        <img src="/logochm.png" alt="Logo CHM" className="h-10 object-contain" loading="lazy" />
        <img src="/banderachm.png" alt="Bandera CHM" className="h-10 object-contain" loading="lazy" />
      </div>

      {/* Encabezado principal con posición fija */}
      <header className="fixed top-16 left-0 w-full bg-blue-900 text-white shadow-md z-10" id="main-header">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo y título */}
          <h1 className="flex items-center gap-2 text-lg font-semibold">
            <a href="                                       
              <img src="/logo75.png" alt="Logo MARC PALAS" className="h-10" loading="lazy" />
              Work Management PALAS Cerrejón
            </a>
          </h1>

          {                       }
          <button className="text-2xl md:hidden" id="menu-toggle" aria-label="Abrir menú">
            &      
          </button>

          {                 }
          <nav className="hidden md:flex space-x-6" id="nav">
            <ul className="flex space-x-4" id="menu">
              <li><a href="#indicadores" className="hover:text-yellow-400">Indicadores</a></li>
              <li><a href="                                                              
              <li><a href="#status" className="hover:text-yellow-400">Estatus</a></li>
              <li><a href="                                                                       
              <li><a href="#re" className="hover:text-yellow-400">RE</a></li>
              <li><a href="                                                            
              <li><a href="#inspecciones" className="hover:text-yellow-400">Inspecciones</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Contenido principal con margen superior */}
      <div className="pt-32">
        {/* Aquí va el contenido principal */}
      </div>
    </>
  );
};

export default Header;
