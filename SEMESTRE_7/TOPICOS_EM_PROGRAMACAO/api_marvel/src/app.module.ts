import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ResponseHeaderInterceptor } from './common/interceptors/response-header.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

import { CharacterModule } from './domains/characters/characters.module';
import { ComicsModule } from './domains/comics/comics.module';
import { SeriesModule } from './domains/series/series.module';

@Module({
  imports: [
    CharacterModule,
    ComicsModule,
    SeriesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/marvel'),
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
