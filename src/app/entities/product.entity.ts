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
  id: string;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column({ nullable: false, type: 'float' })
  price: number;

  @Column()
  employee_id: string;

  @ManyToOne(() => EmployeeEntity)
  @JoinColumn({ name: 'employeeId' })
  employee: EmployeeEntity;
}
