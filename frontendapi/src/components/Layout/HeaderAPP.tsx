import {useState} from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

import fire  from "../../assets/fire.svg"

function HeaderApp() {

    const [menuOpen, setmenuOpen] = useState(false);


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
                                onClick={() => alert("Cerrando sesión...")}
                                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-200"
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