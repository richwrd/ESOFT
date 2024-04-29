import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { Series, SeriesSchema } from './schemas/series.schema';
import { SeriesController } from './series.controller';
import { SeriesService } from './series.service';

import { Comics, ComicsSchema } from '../comics/schemas/comics.schema';
import { Characters, CharactersSchema } from '../characters/schemas/characters.schema';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: Series.name, schema: SeriesSchema },
      { name: Comics.name, schema: ComicsSchema },
      { name: Characters.name, schema: CharactersSchema }]),
  ],
  controllers: [SeriesController],
  providers: [SeriesService]
})
export class SeriesModule { }
