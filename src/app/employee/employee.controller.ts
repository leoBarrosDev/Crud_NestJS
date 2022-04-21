import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeeDto } from './employee.dto';
import { EmployeeService } from './employee.service';

@Controller('api/v1/employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(@Body() body: EmployeeDto) {
    return await this.employeeService.create(body);
  }

  @Get()
  async findAll() {
    return await this.employeeService.findAll();
  }
}
