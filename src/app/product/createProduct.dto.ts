import { Options } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
  id: string;
  @IsNotEmpty()
  @ApiProperty()
  name: string;
  @IsNotEmpty()
  @ApiProperty()
  category: string;
  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  price: number;
  @IsNotEmpty()
  @ApiProperty()
  employee_id: string;
}
