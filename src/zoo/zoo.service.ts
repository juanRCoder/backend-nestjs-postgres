import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { AddAnimalDto } from './dto/add-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class ZooService {

  constructor(private prisma: PrismaService) {}

  private async findingAnimal(id: number, message: string) {
    const findedAnimal = await this.prisma.zoo.findUnique({
      where: {id}
    })
    if (!findedAnimal) {
      throw new NotFoundException(`Animal no encontrado para ${message}!`);
    }
    return findedAnimal;
  }

  public async getZoo() {
    try {
      return await this.prisma.zoo.findMany();
    } catch(e) {
      throw new Error(`Error al obtener la lista de animales: ${e.message}`)
    }
  }

  public async getOneAnimal(id: number) {
    try {
    const findAnimal = await this.findingAnimal(id, 'seleccionar')
    return {message: 'Animal seleccionado', data: findAnimal}
    } catch(e) {
      throw new Error(`Error al seleccionar un animal: ${e}`)
    }
  }

  public async addAnimal(animal: AddAnimalDto) {
    try {
    const addedAnimal = await this.prisma.zoo.create({data: animal})
    return {message: 'Animal agregado', data: addedAnimal}
    } catch(e) {
      throw new InternalServerErrorException(`Error al agregar un nuevo animal: ${e.message}`)
    }
  }

  public async updateAnimal(id: number, updatedData: UpdateAnimalDto) {
    try {
      await this.findingAnimal(id, 'actualizar') 
      const updatedAnimal = await this.prisma.zoo.update({
        where: {id},
        data: updatedData
      })
      return {message: 'Animal actualizado', data: updatedAnimal}
    } catch(e) {
      throw new InternalServerErrorException(`Error al actualizar el animal: ${e.message}`)
    }
  }

  public async  deleteAnimal(id: number) {
    try {
      await this.findingAnimal(id, 'eliminar')
      const deletedAnimal = await this.prisma.zoo.delete({
        where: {id}
      })
      return {message: 'Animal eliminado', data: deletedAnimal}
    } catch(e) {
      throw new InternalServerErrorException(`Error al eliminar el animal: ${e.message}`)
    }
  }
}
