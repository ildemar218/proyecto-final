import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { producto, productoschema } from '../schemas/productos.schema'

@Module({
  imports: [
            MongooseModule.forFeature([
              {
                name: producto.name,
                schema: productoschema,
              },
            ]),
  ],

  controllers: [ProductosController],
  providers: [ProductosService]
})
export class ProductosModule {}
