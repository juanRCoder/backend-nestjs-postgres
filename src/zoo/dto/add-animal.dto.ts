import { ApiProperty } from '@nestjs/swagger';

export class AddAnimalDto {
  @ApiProperty()
  name: string

  @ApiProperty()
  habitat: string
  
  @ApiProperty()
  food: string
  
  @ApiProperty()
  zone: string
  
  @ApiProperty()
  amount: number
}

// Example swagger
export const exampleGET = {
  name: "monkey",
  habitat: "jungle",
  food: "fruits",
  zone: "zone-A", 
  amount: 10,
  createAt: "2024-10-29T23:03:36.656Z",
  updateAt: "2024-10-29T23:03:36.656Z"
}

export function exampleError(type: string) {
  return {
    message: `Error en la solicitud: Animal no encontrado para ${type}!`,
    error: "Internal Server Error",
    statusCode: 500
  }
}