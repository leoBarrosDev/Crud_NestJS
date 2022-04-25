import { Situation, Office } from '../utils/enumTypes';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  situation: Situation;
  @IsNotEmpty()
  @ApiProperty()
  office: Office;
}
