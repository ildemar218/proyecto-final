import { createUsuario } from "../api/apiUsuario";
import { ChangeEvent,FormEvent, useState } from "react";
import { RolUsuario } from "../interface/usuario.interface";
import { Usuario } from "../interface/usuario.interface";



function UsuarioForm() {
    const [usuario, setUsuario] = useState<Usuario>({
        id: '',  
        nombre: '',
        correo: '',
        contraseña: '',
        rol: RolUsuario.CLIENTE, // El rol se inicializa directamente sin condicionales
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Enviando usuario:", usuario);
    
        try {
            const res = await createUsuario(usuario);
            console.log("Usuario creado con éxito:", res);
        } catch (error) {
            console.error("Error al crear usuario:", error);
        }
    };

  return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <input type="text" name="nombre" 
                className="border-2 border-grey-700 p-2 
                rounded-lg bg-zinc-800 block w-full my-2" 
                placeholder="Nombre del Usuario"
                onChange={handleChange}
            />

           

            <input type="email" name="correo" 
                className="border-2 border-grey-700 p-2 
                rounded-lg bg-zinc-800 block w-full my-2" 
                placeholder="Correo del Usuario"
                onChange={handleChange}
            />

            <input type="password" name="contraseña" 
                className="border-2 border-grey-700 p-2 
                rounded-lg bg-zinc-800 block w-full my-2" 
                placeholder="Contraseña del Usuario"
                onChange={handleChange}
            />

            <select name="rol" 
                className="border-2 border-grey-700 p-2 
                rounded-lg bg-zinc-800 block w-full my-2" 
                onChange={handleChange}
            >
                <option value={RolUsuario.ADMIN}>Administrador</option>
                <option value={RolUsuario.CLIENTE}>Cliente</option>
            </select>

            <button type="submit" className="mt-4 bg-indigo-500 text-white px-3 py-2 rounded w-full text-sm">
                Crear Usuario
            </button>
        </form>
    </div>
  )
}

export default UsuarioForm
