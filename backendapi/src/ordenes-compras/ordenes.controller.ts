import { Controller, Get, Post, Delete, Put,Body,Param, NotFoundException, HttpCode,ConflictException  } from "@nestjs/common";
import { OrdenesService } from "./ordenes.service";
import { CreateOrdenesDto } from "../dto/create-ordenes.dto";
import { UpdateOrdenesDto } from "../dto/update-ordenes.dto";

@Controller('ordenes')

export class OrdenesController {
    constructor(private ordenesService: OrdenesService){}

    @Get()
    finAll(){
        return this.ordenesService.findAll();
    }

    @Get(':id')
    async finOne(@Param('id') id: string){
        try {
            const ser = await this.ordenesService.findOne(id);
            if(!ser){
                throw new NotFoundException('No se encontro el producto');
            }
            return ser;
        } catch (error) {
            throw error;  
        }
        
    }

    @Post('/')
    async create(@Body() body:CreateOrdenesDto){
        try {
            return await this.ordenesService.create(body);
        } catch (error) {
            if(error.code === 11000){
                throw new ConflictException('Producto ya existe');
            }
            throw error;
        }
    }

    @Put(':id')
    async update(@Body() body:UpdateOrdenesDto, @Param('id') id: string){
        try {
            const ser = this.ordenesService.update(id,body);
            if(!ser){
                throw new NotFoundException('No se encontro el producto');
            }
        } catch (error) {
            throw error;
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        try {
            const ser = await this.ordenesService.delete(id);
            if(!ser){
                throw new NotFoundException('No se encontro el producto');
            }
            return ser;
        } catch (error) {
            throw error;
        }
    }
}

