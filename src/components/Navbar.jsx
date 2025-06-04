import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
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

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center gap-4 p-4">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
