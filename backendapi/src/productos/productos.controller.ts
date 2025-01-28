import { Controller, Get, Post, Delete, Put,Body,Param, NotFoundException, HttpCode,ConflictException } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { createProductoDto } from 'src/dto/create-producto.dto';

@Controller('productos')
export class ProductosController {
    constructor(private productosService: ProductosService){}

    @Get()
    finAll(){
        return this.productosService.findAll();
    }

    @Get(':id')
    async finOne(@Param('id') id: string){
        try {
            const ser = await this.productosService.finOne(id);
            if(!ser){
                throw new NotFoundException('No se encontro el producto');
            }
            return ser;
        } catch (error) {
            throw error;  
        }
    }

    @Get('categoria/:id')
    async findByCategoria(@Param('id') id: string){
        try {
            const ser = await this.productosService.FindByCategoria(id);
            if(!ser){
                throw new NotFoundException('No se encontro el producto');
            }
            return ser;
        } catch (error) {
            throw error;  
        }
    }

    @Post('/')
    async create(@Body() body:createProductoDto){
        /*console.log(body);
        return this.productosService.create(body);*/
        try {
            return await this.productosService.create(body);
        } catch (error) {
            if(error.code === 11000){
                throw new ConflictException('Producto ya existe');
            }
            throw error;
        }
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
