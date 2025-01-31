<<<<<<< HEAD
import { IsString, IsBoolean, IsOptional,IsNumber} from "class-validator";

export class updateProductoDto{
    
    @IsString()
    @IsOptional()
    titulo: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

   @IsString()
    @IsOptional()
    categoria: string; // ID de la categoría

    @IsString()
    @IsOptional()
    plataforma: string;

    @IsNumber()
    @IsOptional()
    precio: number;

    @IsBoolean()
    @IsOptional()
    disponible?: boolean;

    @IsString()
    @IsOptional()
    estado: string;

    @IsString()
    @IsOptional()
    comprador?: string;

    @IsOptional()
    imagenes?: string[];

    @IsOptional()
    fechaLanzamiento: Date;


}
=======
import { IsString, IsBoolean, IsOptional,IsNumber} from "class-validator";

export class updateProductoDto{
    
    @IsString()
    @IsOptional()
    titulo: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

   @IsString()
    @IsOptional()
    categoria: string; // ID de la categoría

    @IsString()
    @IsOptional()
    plataforma: string;

    @IsNumber()
    @IsOptional()
    precio: number;

    @IsBoolean()
    @IsOptional()
    disponible?: boolean;

    @IsString()
    @IsOptional()
    estado: string;

    @IsString()
    @IsOptional()
    comprador?: string;

    @IsOptional()
    imagenes?: string[];

    @IsOptional()
    fechaLanzamiento: Date;


}
>>>>>>> badc05b (Subiendo el proyecto inicial)
