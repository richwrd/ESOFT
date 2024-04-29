import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

import * as fs from 'fs';


import { CreateCharactersDto, UpdateCharactersDto } from './dto/characters.dto';
import { Characters } from './schemas/characters.schema';


const MARVEL_PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;
const MARVEL_HASH_KEY = process.env.MARVEL_HASH_KEY;
const MARVEL_API_KEY = `?&ts=1&apikey=${MARVEL_PUBLIC_KEY}&hash=${MARVEL_HASH_KEY}`;

const MARVEL_URL_BASE = process.env.MARVEL_URL_BASE;
const MARVEL_URL_CHARACTERS = process.env.MARVEL_URL_CHARACTERS;


@Injectable()
export class CharactersService {
  constructor(@InjectModel(Characters.name) private characterModel: Model<Characters>, private configService: ConfigService,) { }

  async fetchAndSaveAllCharacters(): Promise<void> {

    const limit = 100; // Limite por página
    let offset = 0;
    try {


      const MARVEL_PUBLIC_KEY = this.configService.get<string>('MARVEL_PUBLIC_KEY');
      const MARVEL_HASH_KEY = this.configService.get<string>('MARVEL_HASH_KEY');
      const MARVEL_API_KEY = `?ts=1&apikey=${MARVEL_PUBLIC_KEY}&hash=${MARVEL_HASH_KEY}`;

      const MARVEL_URL_BASE = this.configService.get<string>('MARVEL_URL_BASE');
      const MARVEL_URL_CHARACTERS = this.configService.get<string>('MARVEL_URL_CHARACTERS');


      const url = `${MARVEL_URL_BASE}${MARVEL_URL_CHARACTERS}${MARVEL_API_KEY}&offset=${offset}&limit=${limit}`;

      console.log(url)
      const response = await axios.get(url, { timeout: 3600000 });

      const results = response.data.data.results;


      // Salvar todos os dados das séries em um arquivo JSON
      fs.writeFileSync('all_character.json', JSON.stringify(results, null, 2));
    } catch (error) {
      console.error(`Erro ao buscar e salvar séries: ${error.message}`);
    }
  }


  async create(createCharacterDto: CreateCharactersDto): Promise<Characters> {
    const createdCharacter = new this.characterModel(createCharacterDto);
    return createdCharacter.save();
  }

  async findAll(): Promise<Characters[]> {
    return this.characterModel.find().exec();
  }

  async findOne(id: string): Promise<Characters> {
    const character = await this.characterModel.findById(id).exec();
    if (!character) {
      throw new NotFoundException(`Personagem com o ID ${id} não encontrado`);
    }
    return character;
  }

  async update(id: string, updateCharacterDto: UpdateCharactersDto): Promise<Characters> {
    const existingCharacter = await this.characterModel.findByIdAndUpdate(id, updateCharacterDto, { new: true }).exec();
    if (!existingCharacter) {
      throw new NotFoundException(`Personagem com o ID ${id} não encontrado`);
    }
    return existingCharacter;
  }

  async remove(id: string): Promise<Characters> {
    const deletedCharacter = await this.characterModel.findByIdAndDelete(id).exec();
    if (!deletedCharacter) {
      throw new NotFoundException(`Personagem com o ID ${id} não encontrado`);
    }
    return deletedCharacter;
  }
}
