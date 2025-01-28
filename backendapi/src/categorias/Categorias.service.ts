import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { categoria } from '../schemas/categorias.schema';
import { createCategoriaDto } from '../dto/create-categoria.dto';
import { updateCategoriaDto } from '../dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
    constructor(
        @InjectModel(categoria.name) private readonly categoriaModel: Model<categoria>,
    ) {}

    findAll() {
        return this.categoriaModel.find();
    }

    async create(createcategoria: createCategoriaDto) {
        const newcategoria = new this.categoriaModel(createcategoria);
        return newcategoria.save();
    }

    async findOne(id: string) {
        return this.categoriaModel.findById(id);
    }

    async delete(id: string) {
        return this.categoriaModel.findByIdAndDelete(id);
    }

    async update(id: string, categoria: updateCategoriaDto) {
        return this.categoriaModel.findByIdAndUpdate(id, categoria, { new: true });
    }

   
}