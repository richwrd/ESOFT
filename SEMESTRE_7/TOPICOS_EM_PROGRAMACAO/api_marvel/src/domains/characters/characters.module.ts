import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


import { Character, CharacterSchema } from './schemas/characters.schema';
import { CharacterController } from './characters.controller';
import { CharacterService } from './characters.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Character.name, schema: CharacterSchema }]),
  ],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule { }
