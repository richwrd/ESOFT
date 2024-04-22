import { Module } from '@nestjs/common';
import { CashBoxService } from './cash-box.service';
import { CashBoxController } from './cash-box.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CashBoxSchema, CashBox } from './schema/cash-box.schema'; // Importe o schema aqui


@Module({
  imports: [
    MongooseModule.forFeature([{ name: CashBox.name, schema: CashBoxSchema }]), // Importa o schema do caixa de dinheiro para o MongooseModule
  ],
  controllers: [CashBoxController],
  providers: [CashBoxService],
})
export class CashBoxModule {}
