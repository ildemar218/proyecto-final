import { IsEmail, MinLength } from 'class-validator';

export class LoginUsuarioDto {
    @IsEmail()
    correo: string;

    @MinLength(6)
    contraseña: string;
}
