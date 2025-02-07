import { Categoria } from "../interface/categoria.interface";
const api = 'http://localhost:3000';

// crear una categoria
export const createCategoria = (categoria: Categoria) =>
    fetch(`${api}/categorias`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoria)
    });

    // obtener todas las categorias
    export const getCategorias = () =>
        fetch(`${api}/categorias`)

   // obtener una categoria por id
    export const getCategoria = (id: string) =>
        fetch(`${api}/categorias/${id}`)

    // actualizar una categoria
    export const updateCategoria = async ( id:string, categoria: any) =>{
        const res = await fetch(`${api}/categorias/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(categoria)
        });
        return res;
    }

    // eliminar una categoria
    export const deleteCategoria = (id: string) =>
        fetch(`${api}/categorias/${id}`, {
            method: 'DELETE'
        });
