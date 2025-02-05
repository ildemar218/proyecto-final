import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { categoria } from '../schemas/categorias.schema';
import { IsNumber } from 'class-validator';

@Schema({
    timestamps: true
})
export class producto  {
    @Prop({
        required: true,
        trim: true
    })
    titulo: string;

    @Prop({
        trim: true
    })
    descripcion: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoria', // Referencia a la colección 'Categoria'
        required: true 
    })
    categoria: categoria;

    @Prop({
        required: true,
        trim: true
    })
    plataforma: string;

    @IsNumber()
    @Prop({
        required: true
    })
    precio: number;

    @Prop({
        required: true,
        default: true
    })
    disponible: boolean;

    @Prop({
        required: true
    })
    estado: string;

    @Prop({
        default: null
    })
    comprador: string;

    @Prop({
        trim: true
    })
    imagenes: string;

    @Prop({
        required: true
    })
    fechaLanzamiento: Date;
}
export const productoschema = SchemaFactory.createForClass(producto)
