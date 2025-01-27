import { Controller, Get, Post, Delete, Put,Body,Param, NotFoundException, HttpCode } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { createProductoDto } from 'src/dto/create-producto.dto';

@Controller('productos')
export class ProductosController {
    constructor(private productosService: ProductosService){}

    @Get()
    finAll(){
        return this.productosService.finAll();
    }

    @Get(':id')
    finOne(){
        return 'Trae una Actividad';
    }

    @Post('/')
    create(@Body() body:createProductoDto){
        console.log(body);
        return this.productosService.create(body);
    }
    
    @Put(':id')
    async update(@Body() body:createProductoDto, @Param('id') id: string){
        try {
            const ser = this.productosService.update(id,body);
            if(!ser){
                throw new NotFoundException('No se encontro el producto');
            }
            return ser;
        } catch (error) {
            throw error;
        }
        return 'Actualizando una Actividad';
    }

    
    @Delete(':id')//http://localhost:3000/productos/1
    @HttpCode(204)
    async delete( @Param('id') id: string){
       try {
        const ser = this.productosService.delete(id);
        if(!ser){
            throw new NotFoundException('No se encontro el producto');
        }
        return ser;
       } catch (error) {
        throw error;
       }
       return 'Eliminando una Actividad';
    }

}
