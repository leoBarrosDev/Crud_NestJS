import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Situation, Office } from '../utils/enumTypes';

@Entity({ name: 'employees' })
export class EmployeeEntity {
  constructor() {
    if (!this.employeeId) {
      this.employeeId = uuidv4();
    }
  }

  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  employeeId: string;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  cpf: string;

  @Column()
  @ApiProperty()
  birthday: Date;

  @Column({ type: 'enum', enum: Situation, default: Situation.Active })
  @ApiProperty()
  situation: Situation;

  @Column({ type: 'enum', enum: Office })
  @ApiProperty()
  office: Office;
}
