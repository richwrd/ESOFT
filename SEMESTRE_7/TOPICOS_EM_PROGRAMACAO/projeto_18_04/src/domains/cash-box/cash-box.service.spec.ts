import { Test, TestingModule } from '@nestjs/testing';
import { CashBoxService } from './cash-box.service';

describe('CashBoxService', () => {
  let service: CashBoxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CashBoxService],
    }).compile();

    service = module.get<CashBoxService>(CashBoxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
