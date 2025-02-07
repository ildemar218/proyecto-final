export enum RolUsuario {
    ADMIN = 'admin',
    CLIENTE = 'cliente',
}

export interface Usuario {
    id: string;
    nombre: string;
    correo: string;
    contraseña: string;
    rol: RolUsuario;
    avatar?: string;
}