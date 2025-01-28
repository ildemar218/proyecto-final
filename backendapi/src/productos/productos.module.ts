import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { producto, productoschema } from '../schemas/productos.schema'
import { categoria, categoriaschema } from '../schemas/categorias.schema'

@Module({
  imports: [
            MongooseModule.forFeature([
              {
                name: producto.name,
                schema: productoschema,
              },
              {
                name: categoria.name,
                schema: categoriaschema,
              }
            ]),
  ],

  controllers: [ProductosController],
  providers: [ProductosService]
})
export class ProductosModule {}
