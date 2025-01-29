import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { producto } from "./productos.schema";
import * as mongoose from 'mongoose';
import { Usuario } from "./usuarios.schema";

export type OrdenDocument = orden & Document;

@Schema({
    timestamps:true
})
export class orden {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true })
    cliente: Usuario; // Usuario que realiza la compra

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'producto' }])
    producto: producto[]; // Lista de videojuegos en la orden

    @Prop({ required: true })
    total: number; // Precio total de la compra

    @Prop({
        type: String,
        enum: ['pendiente', 'pagado', 'cancelado'],
        default: 'pendiente'
    })
    estado: string; // Estado de la compra

    @Prop({
        type: String,
        enum: ['tarjeta', 'paypal', 'criptomonedas'],
        required: true
    })
    metodoPago: string; // Método de pago seleccionado

    @Prop({ default: Date.now })
    fechaCompra: Date; // Fecha de la compra

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'producto' }])
    carrito: producto[]; // Carrito de compras del usuario antes de pagar
}

export const OrdenSchema = SchemaFactory.createForClass(orden);