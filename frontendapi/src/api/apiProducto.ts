import {Producto } from '../interface/producto.interface'
const api = 'http://localhost:3000';


// crear un producto
export const createProducto = async (producto: Producto) =>{
   const res = await fetch(`${api}/productos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
       
    });

    return res;
};



    // obtener todos los productos
    export const getProductos = () =>
        fetch(`${api}/productos`)

    // obtener un producto por id
    export const getProducto = (id: string) =>
        fetch(`${api}/productos/${id}`)

    // actualizar un producto
    export const updateProducto = (producto: Producto) =>
        fetch(`${api}/productos/${producto.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        });

    // eliminar un producto
    export const deleteProducto = (id: string) =>
        fetch(`${api}/productos/${id}`, {
            method: 'DELETE'
        });






