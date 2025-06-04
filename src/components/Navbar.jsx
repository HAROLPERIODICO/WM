import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#indicadores", label: "Indicadores" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#status", label: "Estatus" },
    { href: "#programacion", label: "Programación" },
    { href: "#re", label: "RE" },
    { href: "#backlog", label: "BACKLOG" },
    { href: "#inspecciones", label: "Inspecciones" },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <a href="#" className="text-xl font-bold text-blue-600">LOGO</a>
        <button onClick={() => setIsOpen(true)} className="md:hidden text-2xl">
          <FaBars />
        </button>

        {/* Menú desktop */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Menú deslizante móvil */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col items-start gap-4 p-6">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 text-lg hover:text-blue-600 transition"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay oscuro al abrir el menú */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
