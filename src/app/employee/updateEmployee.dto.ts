import { Situation, Office } from '../utils/enumTypes';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  situation: Situation;
  @IsNotEmpty()
  office: Office;
}
