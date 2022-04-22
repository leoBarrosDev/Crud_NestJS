import { Options } from '@nestjs/common';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
  id: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  category: string;
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsNotEmpty()
  employee_id: string;
}
