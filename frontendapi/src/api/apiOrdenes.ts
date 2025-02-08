import { Orden } from "../interface/Orden.interface";
const api = 'http://localhost:3000';

//crear una orden
export const createOrden = (orden: Orden) =>
    fetch(`${api}/ordenes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orden)
    });

//obtener todas las ordenes
export const getOrdenes = () =>
    fetch(`${api}/ordenes`)

//obtener una orden por id 
export const getOrden = (id: string) =>
    fetch(`${api}/ordenes/${id}`)

//actualizar una orden
export const updateOrden =  async (id: string, orden: any) =>{
   const res = await fetch(`${api}/ordenes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orden)
    });
    return res;
}

//eliminar una orden
export const deleteOrden = async (id: string) =>{
    const res = await fetch(`${api}/ordenes/${id}`, {
        method: 'DELETE'
    });
    return res;
}