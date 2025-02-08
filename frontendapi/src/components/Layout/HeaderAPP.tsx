import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import ProductForm from "../ProductForm";
import CategoriaForm from "../CategoriaForm";
import control from "../../assets/control.png";

function HeaderApp() {
  const [menuOpen, setmenuOpen] = useState(false);
  const [FormOpen, setformOpen] = useState(false);
  const [FormOpenCategoria, setformOpenCategoria] = useState(false);

  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-black to-emerald-900 p-4 text-white shadow-lg">
      {/* Logo */}
      <div className="flex gap-3 text-center">
        <img src={control} alt="MyCompany" className="h-10 w-10 bg-blend-color-burn" />
        <span className="font-bold text-2xl text-emerald-900">Rorato Game</span>
      </div>

      {/* Menú del perfil del usuario */}
      <div className="relative">
        {/* Botón para abrir/cerrar menú */}
        <button
          onClick={() => setmenuOpen(!menuOpen)}
          className="flex items-center gap-2 p-2 rounded-full hover:bg-purple-700 focus:outline-none"
        >
          <UserCircleIcon className="h-8 w-8 text-white" />
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
            <a
              href="/perfil"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-200"
            >
              Mi Perfil
            </a>
            <button
              onClick={() => setformOpen(!FormOpen)}
              className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-200"
            >
              Crear Productos
            </button>
            {FormOpen && (
              <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30 overflow-auto z-50">
                <div className="bg-zinc-700 p-6 py-8 rounded shadow-lg w-full max-w-[350px] sm:max-w-[400px] h-auto mt-40 my-5">
                  <h1 className="text-center font-bold text-2xl">Crear Producto</h1>
                  <ProductForm />
                  <button
                    onClick={() => setformOpen(false)}
                    className="mt-4 bg-red-500 text-white px-3 py-2 rounded w-full text-sm"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            )}
            <button
              onClick={() => setformOpenCategoria(!FormOpenCategoria)}
              className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-200"
            >
              Crear Categoria
            </button>
            {FormOpenCategoria && (
              <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30 overflow-auto z-50">
                <div className="bg-zinc-700 p-6 py-8 rounded shadow-lg w-full max-w-[350px] sm:max-w-[400px] h-auto">
                  <h1 className="text-center font-bold text-2xl">Crear Categoria</h1>
                  <CategoriaForm />
                  <button
                    onClick={() => setformOpenCategoria(false)}
                    className="mt-4 bg-red-500 text-white px-3 py-2 rounded w-full text-sm"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            )}
            <Link
              to="/usuarios"
              className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-200"
            >
              Registrar Usuario
            </Link>
            <button
              onClick={() => alert("Cerrando sesión...")}
              className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-black"
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderApp;