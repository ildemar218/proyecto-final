import { useState } from "react";
import { Link } from "react-router-dom";

const NavbarApp = () => {
  const [menuItems] = useState([
    
    { name: "Inicio", link: "/inicio" },
    { name: "Productos", link: "/productos" },
    { name: "Categorías", link: "/categorias" },
    { name: "Contacto", link: "/contacto" },
  ]);

  return (
    <nav className="bg-zinc-900 text-white py-4">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-8">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="relative px-4 py-2 text-lg font-medium transition duration-300 ease-in-out
                          hover:border-2 border-green-500 hover:text-white rounded-xl hover:scale-105"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarApp;
