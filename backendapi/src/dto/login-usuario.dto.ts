<<<<<<< HEAD
import { IsEmail, MinLength } from 'class-validator';

export class LoginUsuarioDto {
    @IsEmail()
    correo: string;

    @MinLength(6)
    contraseña: string;
}
=======
import { IsEmail, MinLength } from 'class-validator';

export class LoginUsuarioDto {
    @IsEmail()
    correo: string;

    @MinLength(6)
    contraseña: string;
}
>>>>>>> badc05b (Subiendo el proyecto inicial)
