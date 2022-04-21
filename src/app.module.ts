import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './app/employee/employee.module';

@Module({
  imports: [TypeOrmModule.forRoot(), EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
