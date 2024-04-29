import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


import { Characters, CharactersSchema } from './schemas/characters.schema';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';

import { Series, SeriesSchema } from '../series/schemas/series.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Characters.name, schema: CharactersSchema }, {name: Series.name, schema: SeriesSchema }]),
  ],
  controllers: [CharactersController],
  providers: [CharactersService],
})
export class CharacterModule { }
