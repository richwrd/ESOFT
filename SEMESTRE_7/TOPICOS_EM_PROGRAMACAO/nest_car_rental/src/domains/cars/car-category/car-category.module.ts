import { Module } from '@nestjs/common';
import { CarCategoryService } from './car-category.service';
import { CarCategoryController } from './car-category.controller';

@Module({
  providers: [CarCategoryService],
  controllers: [CarCategoryController]
})
export class CarCategoryModule {}
