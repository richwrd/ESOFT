import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CreatorsService } from './creators.service';
import { CreatorsController } from './creators.controller';

import { Creators, CreatorsSchema } from './schemas/creator.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Series, SeriesSchema } from '../series/schemas/series.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Creators.name, schema: CreatorsSchema }, { name: Series.name, schema: SeriesSchema}]),
  ],
  controllers: [CreatorsController],
  providers: [CreatorsService],
})
export class CreatorsModule { }
