import { IsArray, IsEnum, IsMongoId, IsNumber, IsOptional, IsDate} from 'class-validator';

export class UpdateOrdenesDto {

    @IsMongoId()
    @IsOptional()
    cliente:string; // Usuario que realiza la compra

    @IsArray()
    @IsMongoId({each:true})
    @IsOptional()
    producto:string[]; // Lista de videojuegos en la orden

    @IsNumber()
    @IsOptional()
    total:number; // Precio total de la compra

    @IsEnum(['pendiente','pagado','cancelado'])
    @IsOptional()
    estado?:string; // Estado de la compra

    @IsEnum(['tarjeta','paypal','criptomonedas'])
    @IsOptional()
    metodoPago:string; // Método de pago seleccionado

    @IsArray()
    @IsMongoId({each:true})
    @IsOptional()
    carrito?:string[]; // Carrito de compras del usuario antes de pagar

    @IsDate()
    @IsOptional()
    fechaCompra?:Date; // Fecha de la compra    

}