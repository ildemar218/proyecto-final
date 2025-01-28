import { Controller,  Get, Post, Delete, Put,Body,Param, NotFoundException, HttpCode,ConflictException  } from "@nestjs/common";
import { CategoriasService } from "../categorias/Categorias.service";
import { createCategoriaDto } from "../dto/create-categoria.dto";
import { ProductosService } from "src/productos/productos.service";

@Controller('categorias')
export class CategoriasController {
    constructor(private categoriasService: CategoriasService){}
   
    @Get()
    finAll(){
        return this.categoriasService.findAll();
    }

    @Get(':id')
    async finOne(@Param('id') id: string){
        try {
            const ser = await this.categoriasService.findOne(id);
            if(!ser){
                throw new NotFoundException('No se encontro el producto');
            }
            return ser;
        } catch (error) {
            throw error;  
        }
        
    }


    @Post('/')
    async create(@Body() body:createCategoriaDto){
        /*console.log(body);
        return this.categoriasService.create(body);*/
        try {
            return await this.categoriasService.create(body);
        } catch (error) {
            if(error.code === 11000){
                throw new ConflictException('Categoria ya existe');
            }
            throw error;
        }
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
    }

}
