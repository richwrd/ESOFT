import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common'

import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

import { ProductModule } from './domains/product/product.module';
import { CashBoxModule } from './domains/cash-box/cash-box.module';

import { LoggerMiddleware } from './common/middleware/logger.middleware';

dotenv.config();

@Module({
  imports: [ProductModule, CashBoxModule, MongooseModule.forRoot(process.env.DB_CONNECTION),],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(LoggerMiddleware)
        .forRoutes({ path: 'users', method: RequestMethod.GET });
    }
}
