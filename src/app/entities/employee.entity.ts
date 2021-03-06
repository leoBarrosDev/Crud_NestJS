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
  employeeId: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  birthday: string;

  @Column({ type: 'enum', enum: Situation, default: Situation.Active })
  situation: Situation;

  @Column({ type: 'enum', enum: Office })
  office: Office;
}
