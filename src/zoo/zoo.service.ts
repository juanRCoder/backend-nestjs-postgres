import { Injectable, NotFoundException } from '@nestjs/common';
import { AddAnimalDto } from './dto/add-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class ZooService {
  // private zoo = [
  //   {
  //     id: 1,
  //     name: 'monkey',
  //     habitat: 'jungle',
  //     food: 'banana',
  //     zone: 'A02',
  //     amount: 12,
  //   },
  //   {
  //     id: 2,
  //     name: 'tiger',
  //     habitat: 'meado',
  //     food: 'banana',
  //     zone: 'A05',
  //     amount: 3,
  //   },
  // ];

  constructor(private prisma: PrismaService) {}

  getZoo() {
    return this.prisma.zoo.findMany();
    // return this.zoo;
  }

  getOneAnimal(id: number) {
    return this.prisma.zoo.findUnique({
      where: {id}
    })
    // const findedAnimal = this.zoo.find((animal) => animal.id === id);
    // if (!findedAnimal) throw new NotFoundException('Animal no encontrado!')
    // return findedAnimal
  }

  addAnimal(animal: AddAnimalDto) {
    return this.prisma.zoo.create({data: animal})
    // this.zoo.push({ ...animal, id: this.zoo.length + 1 });
    // return {message: 'Animal agregado!', data: animal};
  }

  updateAnimal(id: number, updatedData: UpdateAnimalDto) {
    return this.prisma.zoo.update({
      where: {id},
      data: updatedData
    })
    // const findedAnimal = this.zoo.find((animal) => animal.id === id);
    // if (!findedAnimal) throw new NotFoundException('Animal no encontrado para actualizar!');
    // Object.assign(findedAnimal, updatedData)

    // return {message: 'Animal Actualizado!', data: updatedData};
  }

  deleteAnimal(id: number) {
    return this.prisma.zoo.delete({
      where: {id}
    })
    // const removeAnimal = this.zoo.findIndex((animal) => animal.id === id);
    // if (removeAnimal === -1) throw new NotFoundException('Animal no encontrado para eliminar!');
    // const findedAnimal = this.zoo.find(animal => animal.id === id);
    // this.zoo.splice(removeAnimal, 1)
    // return {message: 'Animal Eliminado!', data: findedAnimal}
  }
}
