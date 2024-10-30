import { ApiProperty } from '@nestjs/swagger';


export class UpdateAnimalDto {
  @ApiProperty()
  name?: string

  @ApiProperty()
  habitat?: string

  @ApiProperty()
  food?: string

  @ApiProperty()
  zone?: string

  @ApiProperty()
  amount?: number
}
