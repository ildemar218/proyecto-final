import { Module } from "@nestjs/common";
import { OrdenesService } from "./ordenes.service";
import { OrdenesController } from "./ordenes.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { orden, OrdenSchema } from "../schemas/ordenes.schema";
import { producto,productoschema } from "src/schemas/productos.schema";
import { Usuario,UsuarioSchema } from "src/schemas/usuarios.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: orden.name,
                schema: OrdenSchema,
            },
            {
                name: producto.name,
                schema: productoschema,
            },
            {
                name: Usuario.name,
                schema: UsuarioSchema,
            },
        ]),
    ],
    controllers: [OrdenesController],
    providers: [OrdenesService]
})
export class OrdenesModule { }

