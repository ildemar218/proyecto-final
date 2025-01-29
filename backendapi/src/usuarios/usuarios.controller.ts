import { Controller, Post, Body, Get, Param,Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CrearUsuarioDto } from '../dto/crear-usuario.dto';
import { LoginUsuarioDto } from '../dto/login-usuario.dto';
import { updateUsuarioDto } from 'src/dto/update-usuario.dto';
import { Usuario } from '../schemas/usuarios.schema';

@Controller('usuarios')  // Este decorador es crucial
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) {}

    @Post('registro')
    async registrar(@Body() crearUsuarioDto: CrearUsuarioDto): Promise<Usuario> {
        return this.usuariosService.registrar(crearUsuarioDto);
    }

    @Post('login')
    async login(@Body() loginUsuarioDto: LoginUsuarioDto): Promise<Usuario> {
        return this.usuariosService.validarUsuario(loginUsuarioDto);
    }

    @Get(':id')
    async obtenerUsuario(@Param('id') id: string): Promise<Usuario> {
        return this.usuariosService.buscarPorId(id);
    }

    @Get()
    async obtenerTodosLosUsuarios(): Promise<Usuario[]> {
        return this.usuariosService.buscarTodos();
    }

    @Put(':id')
    async actualizarUsuario(
    @Param('id') id: string,  // Recibe el ID del usuario
    @Body() updateUsuarioDto: updateUsuarioDto,  // Recibe los datos a actualizar
    ): Promise<Usuario> {
    return this.usuariosService.actualizarUsuario(id, updateUsuarioDto);
    }
}
