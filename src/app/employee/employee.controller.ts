import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateEmployeeDto } from './createEmployee.dto';

import { EmployeeService } from './employee.service';
import { UpdateEmployeeDto } from './updateEmployee.dto';

@Controller('api/v1/employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(@Body() body: CreateEmployeeDto) {
    return await this.employeeService.create(body);
  }

  @Get()
  async findAll() {
    return await this.employeeService.findAll();
  }

  @Put(':employeeId')
  async update(
    @Param('employeeId') employeeId: string,
    @Body() body: UpdateEmployeeDto,
  ) {
    return await this.employeeService.update(employeeId, body);
  }

  @Delete(':employeeId')
  async remove(@Param('employeeId') employeeId: string) {
    return await this.employeeService.remove(employeeId);
  }

  // @Get('/:id')
  // async findOne(@Param('id') id: string) {
  //   return await this.employeeService.findOne(id);
  // }
}
