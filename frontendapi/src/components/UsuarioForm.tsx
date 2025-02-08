import { createUsuario } from "../api/apiUsuario";
import { ChangeEvent, FormEvent, useState } from "react";
import { RolUsuario } from "../interface/usuario.interface";
import { Usuario } from "../interface/usuario.interface";

function UsuarioForm() {
    const [usuario, setUsuario] = useState<Usuario>({
        id: '',  
        nombre: '',
        correo: '',
        contraseña: '',
        rol: RolUsuario.CLIENTE, 
    });

    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validar que los campos obligatorios no estén vacíos
        if (!usuario.nombre.trim() || !usuario.correo.trim() || !usuario.contraseña.trim()) {
            setSuccessMessage("Por favor, completa todos los campos.");
            setTimeout(() => setSuccessMessage(null), 3000);
            return;
        }

        try {
            const res = await createUsuario(usuario);
            console.log("Usuario creado con éxito:", res);
            setSuccessMessage("Usuario creado exitosamente!");
            setTimeout(() => setSuccessMessage(null), 3000);

            // Limpiar el formulario después del envío
            setUsuario({
                id: '',  
                nombre: '',
                correo: '',
                contraseña: '',
                rol: RolUsuario.CLIENTE,
            });

        } catch (error) {
            console.error("Error al crear usuario:", error);
            setSuccessMessage("Error al crear el usuario.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" 
                    className="border-2 border-grey-700 p-2 
                    rounded-lg bg-zinc-800 block w-full my-2" 
                    placeholder="Nombre del Usuario"
                    value={usuario.nombre}
                    onChange={handleChange}
                />

                <input type="email" name="correo" 
                    className="border-2 border-grey-700 p-2 
                    rounded-lg bg-zinc-800 block w-full my-2" 
                    placeholder="Correo del Usuario"
                    value={usuario.correo}
                    onChange={handleChange}
                />

                <input type="password" name="contraseña" 
                    className="border-2 border-grey-700 p-2 
                    rounded-lg bg-zinc-800 block w-full my-2" 
                    placeholder="Contraseña del Usuario"
                    value={usuario.contraseña}
                    onChange={handleChange}
                />

                <select name="rol" 
                    className="border-2 border-grey-700 p-2 
                    rounded-lg bg-zinc-800 block w-full my-2" 
                    value={usuario.rol}
                    onChange={handleChange}
                >
                    <option value={RolUsuario.ADMIN}>Administrador</option>
                    <option value={RolUsuario.CLIENTE}>Cliente</option>
                </select>

                <button type="submit" className="mt-4 bg-emerald-900 text-white px-3 py-2 rounded w-full text-sm">
                    Crear Usuario
                </button>
            </form>

            {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
        </div>
    );
}

export default UsuarioForm;
