import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriasModule } from './categorias/Categorias.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ildemar:1234@cluster0.1do3d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      {
        dbName: 'rorato_game',
      }
    ),
    ProductosModule,
    CategoriasModule,
    UsuariosModule
  ],

})
export class AppModule { }
