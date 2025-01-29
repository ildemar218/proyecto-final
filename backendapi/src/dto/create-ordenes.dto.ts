import {IsNotEmpty, IsArray, IsEnum, IsMongoId, IsNumber, IsOptional, IsString, IsDate} from 'class-validator';
import { Type } from 'class-transformer';
export class CreateOrdenesDto {
    @IsMongoId()
    @IsNotEmpty()
    cliente:string; // Usuario que realiza la compra

    @IsArray()
    @IsMongoId({each:true})
    @IsNotEmpty()
    producto:string[]; // Lista de videojuegos en la orden

    @IsNumber()
    @IsNotEmpty()
    total:number; // Precio total de la compra

    @IsEnum(['pendiente','pagado','cancelado'])
    @IsOptional()
    estado?:string; // Estado de la compra

    @IsEnum(['tarjeta','paypal','criptomonedas'])
    @IsNotEmpty()
    metodoPago:string; // Método de pago seleccionado

    @IsArray()
    @IsMongoId({each:true})
    @IsOptional()
    carrito?:string[]; // Carrito de compras del usuario antes de pagar

    @IsDate()
    @Type(() => Date)
    @IsOptional()
    fechaCompra?:Date; // Fecha de la compra


}