import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ResponseHeaderInterceptor } from './common/interceptors/response-header.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';


import { AppController } from './app.controller';
import { AppService } from './app.service';

import { LoggerMiddleware } from './common/middleware/logger.middleware';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './domains/users/users.module';
import { CarsModule } from './domains/cars/cars.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    CarsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/car_rental'),],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    useClass: ResponseHeaderInterceptor,
  },],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.GET });
  }
}
