import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCreatorsDto, UpdateCreatorsDto} from './dto/creators.dto';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import axios from 'axios';

import * as fs from 'fs';

import { Creators } from './schemas/creator.schema';

@Injectable()
export class CreatorsService {
  constructor(@InjectModel(Creators.name) private creatorModel: Model<Creators>, private configService: ConfigService,) { }


  async fetchAndSaveAllCreators(): Promise<void> {

    const limit = 100; // Limite por página
    let offset = 0;
    try {


      const MARVEL_PUBLIC_KEY = this.configService.get<string>('MARVEL_PUBLIC_KEY');
      const MARVEL_HASH_KEY = this.configService.get<string>('MARVEL_HASH_KEY');
      const MARVEL_API_KEY = `?ts=1&apikey=${MARVEL_PUBLIC_KEY}&hash=${MARVEL_HASH_KEY}`;

      const MARVEL_URL_BASE = this.configService.get<string>('MARVEL_URL_BASE');
      const MARVEL_URL_CREATORS = this.configService.get<string>('MARVEL_URL_CREATORS');


      const url = `${MARVEL_URL_BASE}${MARVEL_URL_CREATORS}${MARVEL_API_KEY}&offset=${offset}&limit=${limit}`;

      console.log(url)
      const response = await axios.get(url, { timeout: 3600000 });

      const results = response.data.data.results;


      // Salvar todos os dados das séries em um arquivo JSON
      fs.writeFileSync('all_creator.json', JSON.stringify(results, null, 2));
    } catch (error) {
      console.error(`Erro ao buscar e salvar séries: ${error.message}`);
    }
  }



  async create(createcreatorDto: CreateCreatorsDto): Promise<Creators> {
    const createdcreator = new this.creatorModel(createcreatorDto);
    return createdcreator.save();
  }

  async findAll(): Promise<Creators[]> {
    return this.creatorModel.find().exec();
  }

  async findOne(id: string): Promise<Creators> {
    const creator = await this.creatorModel.findById(id).exec();
    if (!creator) {
      throw new NotFoundException(`Personagem com o ID ${id} não encontrado`);
    }
    return creator;
  }

  async update(id: string, updatecreatorDto: UpdateCreatorsDto): Promise<Creators> {
    const existingcreator = await this.creatorModel.findByIdAndUpdate(id, updatecreatorDto, { new: true }).exec();
    if (!existingcreator) {
      throw new NotFoundException(`Personagem com o ID ${id} não encontrado`);
    }
    return existingcreator;
  }

  async remove(id: string): Promise<Creators> {
    const deletedcreator = await this.creatorModel.findByIdAndDelete(id).exec();
    if (!deletedcreator) {
      throw new NotFoundException(`Personagem com o ID ${id} não encontrado`);
    }
    return deletedcreator;
  }
}
