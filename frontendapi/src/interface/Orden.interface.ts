export interface Orden {
    id: string;
    cliente: string;
    producto: string[];
    total: number;
    estado: 'pendiente' | 'pagado' | 'cancelado';
    metodoPago: 'tarjeta' | 'paypal' | 'criptomonedas';
    fechaCompra: Date;
    carrito: string[];
}