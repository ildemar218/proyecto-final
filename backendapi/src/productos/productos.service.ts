import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { producto } from '../schemas/productos.schema';
import { Model } from 'mongoose';
import { createProductoDto } from 'src/dto/create-producto.dto';
import { updateProductoDto } from 'src/dto/update-producto.dto';


@Injectable()
export class ProductosService {
    constructor(@InjectModel(producto.name) private productoModel: Model<producto>) {}

    
    findAll() {
        return this.productoModel.find();
    }

    async create(createproducto: createProductoDto){
        const newproducto = new this.productoModel(createproducto);
        return newproducto.save();
    }


    async finOne(id: string) {
        return this.productoModel.findById(id);
    }

    async delete(id: string) {
        return this.productoModel.findByIdAndDelete(id);
    }

    async update(id: string, producto: updateProductoDto) {
        return this.productoModel.findByIdAndUpdate(id, producto);
    }

    async FindByCategoria( categoriaId: string): Promise<producto[]> {
        return this.productoModel
        .find({categoria: categoriaId})
        .populate('categoria')
        .exec();
    }

}
