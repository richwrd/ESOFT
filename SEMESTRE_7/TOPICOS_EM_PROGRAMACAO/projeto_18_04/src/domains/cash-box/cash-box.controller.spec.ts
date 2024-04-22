import { Test, TestingModule } from '@nestjs/testing';
import { CashBoxController } from './cash-box.controller';
import { CashBoxService } from './cash-box.service';

describe('CashBoxController', () => {
  let controller: CashBoxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CashBoxController],
      providers: [CashBoxService],
    }).compile();

    controller = module.get<CashBoxController>(CashBoxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
