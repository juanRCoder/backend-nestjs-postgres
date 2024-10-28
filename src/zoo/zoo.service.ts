import { Injectable, NotFoundException } from '@nestjs/common';
import { AddAnimalDto } from './dto/add-animal.dto';
import { UpdatePatchAnimalDto } from './dto/update-animal.dto';

@Injectable()
export class ZooService {
  private zoo = [
    {
      id: 1,
      name: 'monkey',
      habitat: 'jungle',
      food: 'banana',
      zone: 'A02',
      amount: 12,
    },
    {
      id: 2,
      name: 'tiger',
      habitat: 'meado',
      food: 'banana',
      zone: 'A05',
      amount: 3,
    },
  ];

  getZoo() {
    return this.zoo;
  }

  getOneAnimal(id: number) {
    return this.zoo.filter((animal) => animal.id === id);
  }

  addAnimal(animal: AddAnimalDto) {
    this.zoo.push({ ...animal, id: this.zoo.length + 1 });
    return animal;
  }

  updateDataAnimal(id: number, data: UpdatePatchAnimalDto) {
    const updateAnimal = this.zoo.find((animal) => animal.id === id);
    if (!updateAnimal) throw new NotFoundException('Animal no encontrado!');
    
    updateAnimal.food = data.food;
    updateAnimal.amount = data.amount;

    return updateAnimal;
  }
}
