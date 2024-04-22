import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { Comics, ComicsSchema } from './schemas/comics.schema';
import { ComicsController } from './comics.controller';
import { ComicsService } from './comics.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comics.name, schema: ComicsSchema }]),
  ],
  controllers: [ComicsController],
  providers: [ComicsService]
})
export class ComicsModule { }
