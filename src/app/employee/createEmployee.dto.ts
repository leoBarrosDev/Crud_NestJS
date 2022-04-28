import { Office } from '../utils/enumTypes';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsString,
  Length,
  MaxDate,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

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
  @IsDate()
  @ApiProperty()
  @Type(() => Date)
  @MaxDate(new Date(Date.now()))
  birthday: Date;
  @IsNotEmpty()
  @IsEnum(Office)
  @ApiProperty()
  office: Office;
}
