import { IsString, IsEmail, IsEnum, IsOptional } from 'class-validator';
import { RolUsuario } from '../schemas/usuarios.schema';  // Importa el enum RolUsuario si no lo has hecho aún

export class updateUsuarioDto {
    @IsString()
    @IsOptional()
    nombre?: string;

    @IsEmail()
    @IsOptional()
    correo?: string;

    @IsString()
    @IsOptional()
    contraseña?: string;  // Eliminar readonly

    @IsEnum(RolUsuario)
    @IsOptional()
    rol?: RolUsuario;

    @IsString()
    @IsOptional()
    avatar?: string;
}
