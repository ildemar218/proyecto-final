import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {categoria, categoriaschema} from '../schemas/categorias.schema';
import {CategoriasController} from '../categorias/Categorias.controller';
import {CategoriasService} from '../categorias/Categorias.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: categoria.name,
                schema: categoriaschema,
            },
        ]),
    ],
    controllers: [CategoriasController],
    providers: [CategoriasService]
})

export class CategoriasModule {}



