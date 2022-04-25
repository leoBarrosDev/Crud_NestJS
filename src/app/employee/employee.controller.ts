import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestSwagger } from '../helpers/swagger/bad-request-swagger';
import { CreateEmployeeSwagger } from '../swagger/CreateEmployeeSwagger';
import { EmployeeSwagger } from '../swagger/index.employee.swagger';
import { UpdateEmployeeSwagger } from '../swagger/UpdateEmployeeSwagger';
import { CreateEmployeeDto } from './createEmployee.dto';

import { EmployeeService } from './employee.service';
import { UpdateEmployeeDto } from './updateEmployee.dto';

@Controller('api/v1/employee')
@ApiTags('Employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a employee' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: CreateEmployeeSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request.',
    type: BadRequestSwagger,
  })
  async create(@Body() body: CreateEmployeeDto) {
    return await this.employeeService.create(body);
  }

  @Get()
  @ApiOperation({ summary: 'Find all employees' })
  @ApiResponse({
    status: 200,
    description: 'ok.',
    type: EmployeeSwagger,
    isArray: true,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request.',
    type: BadRequestSwagger,
  })
  async findAll() {
    return await this.employeeService.findAll();
  }

  @Put(':employeeId')
  @ApiOperation({ summary: 'Find employee by id and update' })
  @ApiResponse({ status: 200, description: 'ok.', type: UpdateEmployeeSwagger })
  @ApiResponse({
    status: 400,
    description: 'Bad Request.',
    type: BadRequestSwagger,
  })
  async update(
    @Param('employeeId') employeeId: string,
    @Body() body: UpdateEmployeeDto,
  ) {
    return await this.employeeService.update(employeeId, body);
  }

  @Delete(':employeeId')
  @ApiOperation({ summary: 'Find employee by id and delete' })
  @ApiResponse({
    status: 204,
    description: 'No Content.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request.',
    type: BadRequestSwagger,
  })
  async remove(@Param('employeeId') employeeId: string) {
    return await this.employeeService.remove(employeeId);
  }

  // @Get('/:id')
  // async findOne(@Param('id') id: string) {
  //   return await this.employeeService.findOne(id);
  // }
}
