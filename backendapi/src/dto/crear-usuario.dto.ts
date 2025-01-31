<<<<<<< HEAD
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { RolUsuario } from '../schemas/usuarios.schema';

export class CrearUsuarioDto {
    @IsNotEmpty()
    nombre: string;

    @IsEmail()
    correo: string;

    @MinLength(6)
    contraseña: string;

    @IsEnum(RolUsuario)
    rol: RolUsuario;

    @IsOptional()
    avatar?: string;
}
=======
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { RolUsuario } from '../schemas/usuarios.schema';

export class CrearUsuarioDto {
    @IsNotEmpty()
    nombre: string;

    @IsEmail()
    correo: string;

    @MinLength(6)
    contraseña: string;

    @IsEnum(RolUsuario)
    rol: RolUsuario;

    @IsOptional()
    avatar?: string;
}
>>>>>>> badc05b (Subiendo el proyecto inicial)
