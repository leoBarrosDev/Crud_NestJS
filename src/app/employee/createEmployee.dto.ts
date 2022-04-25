import { Office } from '../utils/enumTypes';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  id: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;
  @IsNotEmpty()
  @ApiProperty()
  cpf: string;
  @IsString()
  @ApiProperty()
  birthday: string;
  @IsNotEmpty()
  @IsEnum(Office)
  @ApiProperty()
  office: Office;
}
