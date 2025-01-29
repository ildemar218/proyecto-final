import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';  // Asegúrate de que esté importado correctamente
import { Usuario, UsuarioSchema } from '../schemas/usuarios.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }]),
  ],
  controllers: [UsuariosController],  // Aquí debe estar el controlador
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
