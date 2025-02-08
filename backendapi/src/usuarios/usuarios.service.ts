import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Usuario } from '../schemas/usuarios.schema';
import { CrearUsuarioDto } from '../dto/crear-usuario.dto';
import { LoginUsuarioDto } from '../dto/login-usuario.dto';
import { updateUsuarioDto } from '../dto/update-usuario.dto'; // Importa el DTO de actualización

@Injectable()
export class UsuariosService {
    constructor(@InjectModel(Usuario.name) private usuarioModel: Model<Usuario>) { }

    async buscarTodos(): Promise<Usuario[]> {
        return this.usuarioModel.find().exec();
    }

    async registrar(crearUsuarioDto: CrearUsuarioDto): Promise<Usuario> {
        const { correo, contraseña } = crearUsuarioDto;
        const usuarioExistente = await this.usuarioModel.findOne({ correo });

        if (usuarioExistente) {
            throw new ConflictException('El correo ya está registrado');
        }

        const hashContraseña = await bcrypt.hash(contraseña, 10);
        const usuario = new this.usuarioModel({ ...crearUsuarioDto, contraseña: hashContraseña });
        return usuario.save();
    }

    async validarUsuario(loginUsuarioDto: LoginUsuarioDto): Promise<Usuario> {
        const { correo, contraseña } = loginUsuarioDto;
        const usuario = await this.usuarioModel.findOne({ correo });

        if (!usuario || !(await bcrypt.compare(contraseña, usuario.contraseña))) {
            throw new NotFoundException('Credenciales inválidas');
        }

        return usuario;
    }

    async buscarPorId(id: string): Promise<Usuario> {
        const usuario = await this.usuarioModel.findById(id);
        if (!usuario) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return usuario;
    }

    // Método para actualizar el usuario
    async actualizarUsuario(id: string, updateUsuarioDto: updateUsuarioDto): Promise<Usuario> {
        const usuarioExistente = await this.usuarioModel.findById(id);
        if (!usuarioExistente) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
        }

        // Si se proporciona una nueva contraseña, encriptarla
        if (updateUsuarioDto.contraseña) {
            updateUsuarioDto.contraseña = await bcrypt.hash(updateUsuarioDto.contraseña, 10);
        }

        // Actualizar el usuario
        const usuarioActualizado = await this.usuarioModel.findByIdAndUpdate(id, updateUsuarioDto, { new: true });

        // Verifica si el usuario fue actualizado correctamente
        if (!usuarioActualizado) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
        }

        return usuarioActualizado;
    }

    async eliminarUsuario(id: string): Promise<Usuario> {
        const usuario = await this.usuarioModel.findByIdAndDelete(id);
        if (!usuario) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return usuario;
    }
}
