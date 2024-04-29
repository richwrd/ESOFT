import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import axios from 'axios';

import * as fs from 'fs';

import { CreateComicsDto, UpdateComicsDto } from './dto/comics.dto';
import { Comics } from './schemas/comics.schema';


const MARVEL_PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;
const MARVEL_HASH_KEY = process.env.MARVEL_HASH_KEY;
const MARVEL_API_KEY = `?&ts=1&apikey=${MARVEL_PUBLIC_KEY}&hash=${MARVEL_HASH_KEY}`;

const MARVEL_URL_BASE = process.env.MARVEL_URL_BASE;
const MARVEL_URL_COMICS = process.env.MARVEL_URL_COMICS;


@Injectable()
export class ComicsService {
  constructor(@InjectModel(Comics.name) private comicModel: Model<Comics>, private configService: ConfigService,) { }
  
  async fetchAndSaveAllComics(): Promise<void> {

    const limit = 100; // Limite por página
    let offset = 0;
    try {


      const MARVEL_PUBLIC_KEY = this.configService.get<string>('MARVEL_PUBLIC_KEY');
      const MARVEL_HASH_KEY = this.configService.get<string>('MARVEL_HASH_KEY');
      const MARVEL_API_KEY = `?ts=1&apikey=${MARVEL_PUBLIC_KEY}&hash=${MARVEL_HASH_KEY}`;

      const MARVEL_URL_BASE = this.configService.get<string>('MARVEL_URL_BASE');
      const MARVEL_URL_COMICS = this.configService.get<string>('MARVEL_URL_COMICS');


      const url = `${MARVEL_URL_BASE}${MARVEL_URL_COMICS}${MARVEL_API_KEY}&offset=${offset}&limit=${limit}`;

      console.log(url)
      const response = await axios.get(url, { timeout: 3600000 });

      const results = response.data.data.results;


      // Salvar todos os dados das séries em um arquivo JSON
      fs.writeFileSync('all_comics.json', JSON.stringify(results, null, 2));
    } catch (error) {
      console.error(`Erro ao buscar e salvar séries: ${error.message}`);
    }
  }


  async create(createComicDto: CreateComicsDto): Promise<Comics> {
    const createdComic = new this.comicModel(createComicDto);
    return createdComic.save();
  }

  async findAll(): Promise<Comics[]> {
    return this.comicModel.find().exec();
  }

  async findOne(id: number): Promise<Comics> {
    const comic = await this.comicModel.findById(id).exec();
    if (!comic) {
      throw new NotFoundException(`Quadrinho com o ID ${id} não encontrado`);
    }
    return comic;
  }

  async update(id: number, updateComicDto: UpdateComicsDto): Promise<Comics> {
    const existingComic = await this.comicModel.findByIdAndUpdate(id, updateComicDto, { new: true }).exec();
    if (!existingComic) {
      throw new NotFoundException(`Quadrinho com o ID ${id} não encontrado`);
    }
    return existingComic;
  }

  async remove(id: number): Promise<Comics> {
    const deletedComic = await this.comicModel.findByIdAndDelete(id).exec();
    if (!deletedComic) {
      throw new NotFoundException(`Quadrinho com o ID ${id} não encontrado`);
    }
    return deletedComic;
  }
}
