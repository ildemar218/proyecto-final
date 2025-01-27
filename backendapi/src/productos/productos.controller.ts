import { Controller, Get, Post, Delete, Put,Body } from '@nestjs/common';
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
    update(){
        return 'Modificando una Actividad';
    }

    @Delete(':id')
    delete(){
        return 'Elimina una Actividad';
    }

}
