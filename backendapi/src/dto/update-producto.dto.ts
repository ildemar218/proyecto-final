import { IsString, IsBoolean, IsOptional,IsNumber} from "class-validator";

export class updateProductoDto{

    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    status?: boolean;

    @IsNumber()
    @IsOptional()
    stock?:number;

    @IsNumber()
    @IsOptional()
    price?:number;
}
