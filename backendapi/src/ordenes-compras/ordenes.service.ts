import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {orden} from "../schemas/ordenes.schema";
import { CreateOrdenesDto } from "src/dto/create-ordenes.dto";
import { UpdateOrdenesDto } from "src/dto/update-ordenes.dto";

@Injectable()
export class OrdenesService {
    constructor(@InjectModel(orden.name) private ordenModel: Model<orden>) {}

    async create(createOrden: CreateOrdenesDto): Promise<orden> {
        const newOrden = new this.ordenModel({
            ...createOrden,
            fechaCompra: new Date(), // fecha de la compra se genera automáticamente
            estado: 'pendiente'
        });
        return await newOrden.save();
    }


    async findAll(): Promise<orden[]> {
        return this.ordenModel.find().populate('producto').populate('cliente').exec();
    }

    async findOne(id: string): Promise<orden> {
        const orden = await this.ordenModel.findById(id).populate('producto');
        if (!orden) throw new NotFoundException('Orden no encontrada');
        return orden;
    }

    async update(id: string, updateOrden: UpdateOrdenesDto): Promise<orden> {
        const orden = await this.ordenModel.findByIdAndUpdate(id, updateOrden, {new: true});
        if (!orden) throw new NotFoundException('Orden no encontrada');
        return orden;
    }

    async delete(id: string): Promise<orden> {
        const orden = await this.ordenModel.findByIdAndDelete(id);
        if (!orden) throw new NotFoundException('Orden no encontrada');
        return orden;
    }

}

