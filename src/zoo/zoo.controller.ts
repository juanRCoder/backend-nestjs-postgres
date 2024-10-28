import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { ZooService } from './zoo.service';
import { AddAnimalDto } from './dto/add-animal.dto';
import { UpdatePatchAnimalDto } from './dto/update-animal.dto';

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
  updateAnimal(
    @Param('id') id: number,
    @Body() dataAnimal: UpdatePatchAnimalDto,
  ) {
    return this.zooService.updateDataAnimal(Number(id), dataAnimal);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.zooService.remove(+id);
  // }
}
