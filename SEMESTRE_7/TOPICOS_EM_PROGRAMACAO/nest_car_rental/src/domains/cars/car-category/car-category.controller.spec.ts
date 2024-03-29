import { Test, TestingModule } from '@nestjs/testing';
import { CarCategoryController } from './car-category.controller';

describe('CarCategoryController', () => {
  let controller: CarCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarCategoryController],
    }).compile();

    controller = module.get<CarCategoryController>(CarCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
