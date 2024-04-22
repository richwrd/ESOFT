import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';


import { CreateCharacterDto, UpdateCharacterDto } from './dto/characters.dto';
import { Character } from './schemas/characters.schema';


const MARVEL_PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;
const MARVEL_HASH_KEY = process.env.MARVEL_HASH_KEY;
const MARVEL_API_KEY = `?&ts=1&apikey=${MARVEL_PUBLIC_KEY}&hash=${MARVEL_HASH_KEY}`;

const MARVEL_URL_BASE = process.env.MARVEL_URL_BASE;
const MARVEL_URL_CHARACTERS = process.env.MARVEL_URL_CHARACTERS;


@Injectable()
export class CharacterService {
  constructor(@InjectModel(Character.name) private characterModel: Model<Character>) { }


  async fetchCharactersApi(): Promise<Character[]> {
    try {
      const existingCharacters = await this.characterModel.find().exec();

      if (existingCharacters.length === 0) {
        const response = await axios.get(`${MARVEL_URL_BASE}${MARVEL_URL_CHARACTERS}${MARVEL_API_KEY}`);
        return this.createCharactersApi(response.data.data.results);
      }

      return existingCharacters;
    } catch (error) {
      throw new NotFoundException(`Error fetching characters: ${error.message}`);
    }
  }

  async createCharactersApi(data): Promise<Character[]> {
    const charactersToCreate = [];
    try {
      for (const characterData of data) {
        const character = new this.characterModel({
          id: characterData.id,
          name: characterData.name,
          description: characterData.description,
          thumbnail: `${characterData.thumbnail.path}.${characterData.thumbnail.extension}`,
          comics: [], // You might need to adjust this depending on how you fetch comics data
        });
        charactersToCreate.push(character);
      }

      return this.characterModel.create(charactersToCreate);
    } catch (error) {
      throw new NotFoundException(`Error creating characters: ${error.message}`);
    }
  }


  async create(createCharacterDto: CreateCharacterDto): Promise<Character> {
    const createdCharacter = new this.characterModel(createCharacterDto);
    return createdCharacter.save();
  }

  async findAll(): Promise<Character[]> {
    return this.characterModel.find().exec();
  }

  async findOne(id: number): Promise<Character> {
    const character = await this.characterModel.findById(id).exec();
    if (!character) {
      throw new NotFoundException(`Personagem com o ID ${id} não encontrado`);
    }
    return character;
  }

  async update(id: number, updateCharacterDto: UpdateCharacterDto): Promise<Character> {
    const existingCharacter = await this.characterModel.findByIdAndUpdate(id, updateCharacterDto, { new: true }).exec();
    if (!existingCharacter) {
      throw new NotFoundException(`Personagem com o ID ${id} não encontrado`);
    }
    return existingCharacter;
  }

  async remove(id: number): Promise<Character> {
    const deletedCharacter = await this.characterModel.findByIdAndDelete(id).exec();
    if (!deletedCharacter) {
      throw new NotFoundException(`Personagem com o ID ${id} não encontrado`);
    }
    return deletedCharacter;
  }
}
