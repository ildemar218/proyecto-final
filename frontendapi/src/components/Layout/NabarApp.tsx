import { useState } from "react";


const NavbarApp = () => {
  const [menuItems] = useState([
    { name: "Inicio", link: "/" },
    { name: "Productos", link: "/servicios" },
    { name: "Proyectos", link: "/proyectos" },
    { name: "Contacto", link: "/contacto" },
  ]);

  

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-8">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="relative px-4 py-2 text-lg font-medium transition duration-300 ease-in-out
                           hover:border-2 border-green-500 hover:text-white rounded-xl hover:scale-105"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarApp;
