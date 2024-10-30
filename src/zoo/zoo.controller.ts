import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ZooService } from './zoo.service';
import { AddAnimalDto, exampleError, exampleGET } from './dto/add-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { ApiResponse, ApiTags, ApiOperation } from '@nestjs/swagger';


@Controller('zoo/animals')
@ApiTags('animals')
export class ZooController {
  constructor(private zooService: ZooService) {}

  @Get('all')
  @ApiOperation({summary: 'Obtiene todos los animales'})
  @ApiResponse({
    status: 200,
    description: 'Retorna todos los animales',
    example: [exampleGET]
  })
  getZoo() {
    return this.zooService.getZoo();
  }

  @Get('select/:id')
  @ApiOperation({summary: 'Obtiene un animal en especifico'})
  @ApiResponse({
    status: 200,
    description: 'Retorna un animal en especifico mediante el id',
    example: {message: "Animal seleccionado", data: exampleGET},
  },)
  @ApiResponse({
    status: 500,
    description: 'Error al seleccionar un animal desconocido!',
    example: exampleError('seleccionar'),
  })
  getOneAnimal(@Param('id') id: string) {
    return this.zooService.getOneAnimal(Number(id));
  }

  @Post('add')
  @ApiOperation({summary: 'Agrega un nuevo animal'})
  @ApiResponse({
    status: 200,
    description: 'Retorna el animal agregado',
    example: {message: "Animal agregado", data: exampleGET},
  })
  addAnimal(@Body() animal: AddAnimalDto) {
    return this.zooService.addAnimal(animal);
  }

  @Patch('update/:id')
  @ApiOperation({summary: 'Actualiza un animal'})
  @ApiResponse({
    status: 200,
    description: 'Retorna el animal actualizado',
    example: {message: "Animal actualizado", data: exampleGET},
  },)
  @ApiResponse({
    status: 500,
    description: 'Error al actualizar un animal desconocido!',
    example: exampleError('actualizar'),
  })
  updatePropertiesAnimal(
    @Param('id') id: string,
    @Body() dataAnimal: UpdateAnimalDto,
  ) {
    return this.zooService.updateAnimal(Number(id), dataAnimal);
  }

  @Delete('delete/:id')
  @ApiOperation({summary: 'Elimina un animal'})
  @ApiResponse({
    status: 200,
    description: 'Retorna el animal eliminado',
    example: {message: "Animal eliminado", data: exampleGET},
  },)
  @ApiResponse({
    status: 500,
    description: 'Error al eliminar un animal desconocido!',
    example: exampleError('eliminar'),
  })
  remove(@Param('id') id: string) {
    return this.zooService.deleteAnimal(Number(id))
  }
}
