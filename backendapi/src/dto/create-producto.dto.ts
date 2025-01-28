import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsArray, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";


export class createProductoDto{
    @IsString()//isString() valida que el campo sea de tipo string
    @IsNotEmpty()//isNotEmpty() valida que el campo no esté vacío
    titulo: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsString()
    @IsNotEmpty()
    categoria: string; // ID de la categoría

    @IsString()
    @IsNotEmpty()
    plataforma: string;

    @IsNumber()
    @IsNotEmpty()
    precio: number;

    @IsBoolean()
    @IsOptional()
    disponible?: boolean;

    @IsString()
    @IsNotEmpty()
    estado: string;


    @IsString()
    @IsOptional()
    comprador?: string;

    @IsArray()
    @IsOptional()
    @IsString({ each: true })
    imagenes?: string[];

    @IsDate()
    @Type(() => Date)
    @IsNotEmpty()
    fechaLanzamiento: Date; 
}
