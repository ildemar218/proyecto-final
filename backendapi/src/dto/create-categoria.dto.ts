import { IsString, IsBoolean, IsOptional, IsNotEmpty, IsNumber  } from "class-validator";

export class createCategoriaDto{

    @IsString()//isString() valida que el campo sea de tipo string
    @IsNotEmpty()//isNotEmpty() valida que el campo no esté vacío
    nombre: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

  
}