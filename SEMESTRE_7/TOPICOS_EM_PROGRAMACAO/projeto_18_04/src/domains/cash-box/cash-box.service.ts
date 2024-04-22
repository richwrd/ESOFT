import { Injectable } from '@nestjs/common';
import { CreateCashBoxDto } from './dto/create-cash-box.dto';
import { UpdateCashBoxDto } from './dto/update-cash-box.dto';

@Injectable()
export class CashBoxService {
  create(createCashBoxDto: CreateCashBoxDto) {
    return 'This action adds a new cashBox';
  }

  findAll() {
    return `This action returns all cashBox`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cashBox`;
  }

  update(id: number, updateCashBoxDto: UpdateCashBoxDto) {
    return `This action updates a #${id} cashBox`;
  }

  remove(id: number) {
    return `This action removes a #${id} cashBox`;
  }
}
