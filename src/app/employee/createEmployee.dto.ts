import { Office } from '../utils/enumTypes';
import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeDto {
  id: string;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  cpf: string;
  @IsString()
  birthday: string;
  @IsNotEmpty()
  @IsEnum(Office)
  office: Office;
}
