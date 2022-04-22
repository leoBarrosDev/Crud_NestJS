import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './app/employee/employee.module';
import { ProductModule } from './app/product/product.module';

@Module({
  imports: [TypeOrmModule.forRoot(), EmployeeModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
