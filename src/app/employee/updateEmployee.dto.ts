import { Situation, Office } from '../utils/enumTypes';
import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmployeeDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  name: string;
  @ApiProperty()
  @IsString()
  situation: Situation;
  @ApiProperty()
  office: Office;
}
