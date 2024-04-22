import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CashBoxService } from './cash-box.service';
import { CreateCashBoxDto } from './dto/create-cash-box.dto';
import { UpdateCashBoxDto } from './dto/update-cash-box.dto';

@Controller('cash-box')
export class CashBoxController {
  constructor(private readonly cashBoxService: CashBoxService) {}

  @Post()
  create(@Body() createCashBoxDto: CreateCashBoxDto) {
    return this.cashBoxService.create(createCashBoxDto);
  }

  @Get()
  findAll() {
    return this.cashBoxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cashBoxService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCashBoxDto: UpdateCashBoxDto) {
    return this.cashBoxService.update(+id, updateCashBoxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cashBoxService.remove(+id);
  }
}
