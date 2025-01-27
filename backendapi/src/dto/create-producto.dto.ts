import { IsString, IsBoolean, IsOptional, IsNotEmpty, IsNumber } from "class-validator";


export class createProductoDto{

    @IsString()
    @IsNotEmpty()
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
