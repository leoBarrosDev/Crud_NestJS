import { Situation, Office } from '../utils/enumTypes';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class EmployeeDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  cpf: string;
  @IsNotEmpty()
  @IsString()
  birthday: string;
  @IsNotEmpty()
  situation: Situation;
  @IsNotEmpty()
  office: Office;
}
