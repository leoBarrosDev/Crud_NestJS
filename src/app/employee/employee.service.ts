import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeEntity } from '../entities/employee.entity';
import { CreateEmployeeDto } from './createEmployee.dto';
import { UpdateEmployeeDto } from './updateEmployee.dto';
import isValid from '../utils/cpfValidator';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly employeeRepository: Repository<EmployeeEntity>,
  ) {}

  async create(data: CreateEmployeeDto) {
    try {
      if (isValid(data.cpf)) {
        const consult = await this.employeeRepository.findOne({
          where: { cpf: data.cpf },
        });
        if (consult) {
          return 'CPF already exists';
        }
        return await this.employeeRepository.save(
          this.employeeRepository.create(data),
        );
      }
      return 'CPF invalid';
      // throw new Error('Invalid CPF');
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    return await this.employeeRepository.find();
  }

  async update(employeeId: string, data: UpdateEmployeeDto) {
    const consult = await this.employeeRepository.findOne(employeeId);
    if (consult) {
      try {
        await this.employeeRepository.update(employeeId, data);
        return await this.employeeRepository.findOne(employeeId);
      } catch (error) {
        return error.message;
      }
    }
    try {
      return await this.employeeRepository.update(employeeId, data);
    } catch (error) {
      return error.message;
    }
  }

  async remove(employeeId: string) {
    const consult = await this.employeeRepository.findOne(employeeId);
    if (consult) {
      try {
        await this.employeeRepository.delete(employeeId);
        return 'Deleted';
      } catch (error) {
        return error.message;
      }
    }
  }

  // async findOne(id: string) {
  //   return await this.employeeRepository.findOne(id);
  // }
}
