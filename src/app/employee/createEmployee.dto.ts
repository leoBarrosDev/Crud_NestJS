import { Office } from '../utils/enumTypes';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeDto {
  id: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  cpf: string;
  @IsString()
  birthday: string;
  @IsNotEmpty()
  @IsEnum(Office)
  office: Office;
}
