import {useState} from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import ProductForm from "../ProductForm";
import fire  from "../../assets/fire.svg"

function HeaderApp() {

    const [menuOpen, setmenuOpen] = useState(false);
    const [FormOpen, setformOpen] = useState(false);

    return (
            <header className="flex items-center justify-between bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 text-white shadow-lg">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={fire} alt="MyCompany" className="h-10 w-10" />
                    <span className="text-xl font-bold">Rorato Game</span>
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
                        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden">
                            <a
                                href="/perfil"
                                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                                >
                                Mi Perfil
                            </a>
                            <button
                                onClick={() => setformOpen(!FormOpen)}
                                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-200"
                                >
                                crear Productos
                            </button>
                            {FormOpen && (
                            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center  bg-opacity-50 overflow-auto">
                                <div className="bg-white p-6 rounded shadow-lg w-full max-w-[90%] sm:max-w-[600px]">
                                <h1 className="text-center font-bold text-3xl my-2">Crear Producto</h1>
                                <ProductForm />
                                <button 
                                    onClick={() => setformOpen(false)} 
                                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"
                                >
                                    Cerrar
                                </button>
                                </div>
                            </div>
                            )}
                            
                            <button
                                onClick={() => alert("Cerrando sesión...")}
                                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-200"
                                >
                                Cerrar sesión
                            </button>
                            <button
                                onClick={() => alert("Cerrando sesión...")}
                                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-black"
                                >
                                Cerrar sesión
                            </button>
                        </div>
                        
                    )}
                </div>


            </header>
            
        )
}

export default HeaderApp