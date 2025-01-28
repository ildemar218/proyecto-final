import { Controller,  Get, Post, Delete, Put,Body,Param, NotFoundException, HttpCode  } from "@nestjs/common";
import { CategoriasService } from "../categorias/Categorias.service";
import { createCategoriaDto } from "../dto/create-categoria.dto";

@Controller('categorias')
export class CategoriasController {
    constructor(private categoriasService: CategoriasService){}

    @Get()
    finAll(){
        return this.categoriasService.finAll();
    }

    @Get(':id')
    finOne(){
        return 'Trae una Actividad';
    }

    @Post('/')
    create(@Body() body:createCategoriaDto){
        console.log(body);
        return this.categoriasService.create(body);
    }
    
    @Put(':id')
    async update(@Body() body:createCategoriaDto, @Param('id') id: string){
        try {
            const ser = this.categoriasService.update(id,body);
            if(!ser){
                throw new NotFoundException('No se encontro el producto');
            }
            return ser;
        } catch (error) {
            throw error;
        }
        return 'Actualizando una Actividad';
    }

    
    @Delete(':id')//http://localhost:3000/categorias/
    @HttpCode(204)
    async delete( @Param('id') id: string){
       try {
        const ser = this.categoriasService.delete(id);
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
