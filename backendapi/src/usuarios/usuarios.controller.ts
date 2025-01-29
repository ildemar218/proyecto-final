import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CrearUsuarioDto } from '../dto/crear-usuario.dto';
import { LoginUsuarioDto } from '../dto/login-usuario.dto';
import { Usuario } from '../schemas/usuarios.schema';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) { }

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

}
