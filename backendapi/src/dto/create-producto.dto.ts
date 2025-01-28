import { IsString, IsBoolean, IsOptional, IsNotEmpty, IsNumber } from "class-validator";


export class createProductoDto{

    @IsString()//isString() valida que el campo sea de tipo string
    @IsNotEmpty()//isNotEmpty() valida que el campo no esté vacío
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    status?: boolean;

    @IsNumber()
    stock?:number;

    @IsNumber()
    @IsNotEmpty()
    price?:number;
}
