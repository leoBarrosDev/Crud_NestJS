import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { EmployeeEntity } from './employee.entity';

@Entity({ name: 'products' })
export class ProductEntity {
  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }

  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  category: string;

  @Column({ nullable: false, type: 'float' })
  @ApiProperty()
  price: number;

  @Column()
  @ApiProperty()
  employee_id: string;

  @ManyToOne(() => EmployeeEntity)
  @JoinColumn({ name: 'employeeId' })
  employee: EmployeeEntity;
}
