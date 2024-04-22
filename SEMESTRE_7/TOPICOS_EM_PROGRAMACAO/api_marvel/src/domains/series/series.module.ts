import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { Series, SeriesSchema } from './schemas/series.schema';
import { SeriesController } from './series.controller';
import { SeriesService } from './series.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Series.name, schema: SeriesSchema }]),
  ],
  controllers: [SeriesController],
  providers: [SeriesService]
})
export class SeriesModule { }
