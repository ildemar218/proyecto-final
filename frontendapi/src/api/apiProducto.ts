import { Producto } from '../interface/producto.interface';
const api = 'http://localhost:3000';

// Crear un producto
export const createProducto = async (producto: Producto, ) => {
    try {
        const response = await fetch(`${api}/productos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        });

        if (!response.ok) throw new Error('Error al crear el producto');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};


// Obtener todos los productos
export const getProductos = async () => {
    try {
        const response = await fetch(`${api}/productos`);
        if (!response.ok) throw new Error('Error al obtener productos');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

// Obtener un producto por ID
export const getProducto = async (id: string) => {
    try {
        const response = await fetch(`${api}/productos/${id}`);
        if (!response.ok) throw new Error('Error al obtener el producto');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

// Actualizar un producto
export const updateProducto = async (producto: Producto) => {
    try {
        const response = await fetch(`${api}/productos/${producto.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        });

        if (!response.ok) throw new Error('Error al actualizar el producto');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

// Eliminar un producto
export const deleteProducto = async (id: string) => {
    try {
        const response = await fetch(`${api}/productos/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error('Error al eliminar el producto');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};






