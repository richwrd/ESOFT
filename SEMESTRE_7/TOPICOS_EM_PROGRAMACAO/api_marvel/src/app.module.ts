import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ResponseHeaderInterceptor } from './common/interceptors/response-header.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { CharacterModule } from './domains/characters/characters.module';
import { ComicsModule } from './domains/comics/comics.module';
import { SeriesModule } from './domains/series/series.module';
import { CreatorsModule } from './domains/creators/creators.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/marvel'),
    AuthModule,
    CharacterModule,
    ComicsModule,
    SeriesModule,
    CreatorsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseHeaderInterceptor,
    },
  ],
})
export class AppModule { }
