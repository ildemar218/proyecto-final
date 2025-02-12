import { Usuario } from "../interface/usuario.interface";
const api = 'http://localhost:3000';

// crear un usuario 
export const createUsuario = (usuario: Usuario) =>
    fetch(`${api}/usuarios/registro`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    });

// obtener todos los usuarios
export const getUsuarios = () =>
    fetch(`${api}/usuarios`);

// obtener un usuario por id
export const getUsuario = (id: string) =>
    fetch(`${api}/usuarios/${id}`); 

// actualizar un usuario
export const updateUsuario = async (id:string,usuario: Usuario) => {
    const res = await fetch(`${api}/usuarios/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    });
    return res;
}

// eliminar un usuario
export const deleteUsuario = (id: string) =>
    fetch(`${api}/usuarios/${id}`, {
        method: 'DELETE'
    });