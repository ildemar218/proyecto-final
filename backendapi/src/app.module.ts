import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriasModule } from './categorias/Categorias.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { OrdenesModule } from './ordenes-compras/ordenes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://liz:liz123@cluster0.r8neg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      {
        dbName: 'rorato_game',
      }
    ),
    ProductosModule,
    CategoriasModule,
    UsuariosModule,
    OrdenesModule
    
  ],

})
export class AppModule { }
