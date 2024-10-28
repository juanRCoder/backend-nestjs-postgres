import { Controller, Get, Post, Body, Param, Patch, Put, Delete, Inject } from '@nestjs/common';
import { ZooService } from './zoo.service';
import { AddAnimalDto } from './dto/add-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Controller('zoo/animals')
export class ZooController {
  constructor(private zooService: ZooService) {}

  @Get()
  getZoo() {
    return this.zooService.getZoo();
  }

  @Get(':id')
  getOneAnimal(@Param('id') id: string) {
    return this.zooService.getOneAnimal(Number(id));
  }

  @Post('add')
  addAnimal(@Body() animal: AddAnimalDto) {
    return this.zooService.addAnimal(animal);
  }

  @Patch(':id')
  updatePropertiesAnimal(
    @Param('id') id: string,
    @Body() dataAnimal: UpdateAnimalDto,
  ) {
    return this.zooService.updateAnimal(Number(id), dataAnimal);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zooService.deleteAnimal(Number(id))
  }
}
