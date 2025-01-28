import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true
})
export class producto {
    @Prop({
        unique: true,
        required: true,
        trim: true      // trim Retira los espacios del inicio y el
    })                  // final de una cadena
    title: string;

    @Prop({
        trim: true 
    })
    description: string;

    @Prop({ default: false})
    status: boolean;
    
    @Prop({ required: true }) // Stock es obligatorio
    stock: number;

    @Prop({ required: true }) // Price es obligatorio
    price: number;
}
export const productoschema = SchemaFactory.createForClass(producto)
