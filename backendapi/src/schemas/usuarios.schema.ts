import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsuarioDocument = Usuario & Document;

export enum RolUsuario {
    ADMIN = 'admin',
    CLIENTE = 'cliente',
}

@Schema()
export class Usuario {
    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true, unique: true })
    correo: string;

    @Prop({ required: true })
    contraseña: string;

    @Prop({ required: true, enum: RolUsuario })
    rol: RolUsuario;

    @Prop()
    avatar?: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
