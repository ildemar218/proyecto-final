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
export const getProducto = async (id: string) => {
    const res = await fetch(`${api}/productos/${id}`);
    return res;
}

// actualizar un producto
export const updateProducto = async (id: string, producto: any) => {
    const res = await fetch(`${api}/productos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
    });
    return res;
}

// eliminar un producto
export const deleteProducto = async (id: string) => {
    const res = await fetch(`${api}/productos/${id}`, {
        method: 'DELETE'
    });
    return res;
}





