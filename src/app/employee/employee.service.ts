import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeEntity } from '../entities/employee.entity';
import { EmployeeDto } from './employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly employeeRepository: Repository<EmployeeEntity>,
  ) {}

  async create(data: EmployeeDto) {
    try {
      return await this.employeeRepository.save(
        this.employeeRepository.create(data),
      );
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    return await this.employeeRepository.find();
  }
}
