import { Office } from '../utils/enumTypes';
import { IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Unique } from 'typeorm';

export class CreateEmployeeDto {
  id: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @Length(11, 11)
  cpf: string;
  @IsString()
  @ApiProperty()
  birthday: string;
  @IsNotEmpty()
  @IsEnum(Office)
  @ApiProperty()
  office: Office;
}
