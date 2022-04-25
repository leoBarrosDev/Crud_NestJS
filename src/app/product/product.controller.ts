import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestSwagger } from '../helpers/swagger/bad-request-swagger';
import { CreateProductSwagger } from '../swagger/CreateProductSwagger';
import { ProductSwagger } from '../swagger/index.product.swagger';
import { CreateProductDto } from './createProduct.dto';
import { ProductService } from './product.service';

@Controller('api/v1/product')
@ApiTags('Products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'Create a product' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: CreateProductSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request.',
    type: BadRequestSwagger,
  })
  async create(@Body() body: CreateProductDto) {
    return await this.productService.create(body);
  }

  @Get()
  @ApiOperation({ summary: 'Find all products' })
  @ApiResponse({
    status: 200,
    description: 'ok.',
    type: ProductSwagger,
    isArray: true,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request.',
    type: BadRequestSwagger,
  })
  async findAll() {
    return await this.productService.findAll();
  }
}
