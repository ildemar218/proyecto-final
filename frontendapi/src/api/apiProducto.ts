const api = 'http://localhost:3000';

interface Producto {
    id: number;
    titulo: string;
    descripcion: string;
    categoria: string;
    plataforma: string;
    precio: number;
    disponible: boolean;
    estado: string;
    comprador: string;
    imagenes: string;
    fechaLanzamiento: string;
}

export const createProducto = (producto: Producto) =>
    fetch(`${api}/productos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
    });





