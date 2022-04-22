import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';
import { CreateProductDto } from './createProduct.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async create(data: CreateProductDto) {
    try {
      return await this.productRepository.save(
        this.productRepository.create(data),
      );
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    return await this.productRepository.find();
  }
}
