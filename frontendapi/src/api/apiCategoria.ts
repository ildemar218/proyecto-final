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
    export const getCategoria = (id: number) =>
        fetch(`${api}/categorias/${id}`)

    // actualizar una categoria
    export const updateCategoria = (categoria: Categoria) =>
        fetch(`${api}/categorias/${categoria.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(categoria)
        });

    // eliminar una categoria
    export const deleteCategoria = (id: number) =>
        fetch(`${api}/categorias/${id}`, {
            method: 'DELETE'
        });
