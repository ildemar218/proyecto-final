import {IsString, IsBoolean, IsOptional,IsNumber} from "class-validator";

export class updateCategoriaDto{

    @IsString()
    @IsOptional()
    nombre: string;

    @IsString()
    @IsOptional()
    descripcion?: string;
}