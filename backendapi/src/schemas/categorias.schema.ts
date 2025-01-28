import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@Schema({
    timestamps: true
})
export class categoria {
    @Prop({
        unique: true,//unique: true, significa que el campo es único
        required: true,//required: true, significa que el campo es obligatorio
        trim: true//trim: true, significa que se retirarán los espacios del inicio y el final de una cadena
    })
    nombre:string;

    @Prop({
        trim: true
    }) // Descripción opcional de la categoría
    descripcion: string;

}

export const categoriaschema = SchemaFactory.createForClass(categoria)
