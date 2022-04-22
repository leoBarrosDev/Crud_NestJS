import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './createProduct.dto';
import { ProductService } from './product.service';

@Controller('api/v1/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() body: CreateProductDto) {
    return await this.productService.create(body);
  }

  @Get()
  async findAll() {
    return await this.productService.findAll();
  }
}
