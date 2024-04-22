import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';

import { CreateComicsDto, UpdateComicsDto } from './dto/comics.dto';
import { Comics } from './schemas/comics.schema';


const MARVEL_PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;
const MARVEL_HASH_KEY = process.env.MARVEL_HASH_KEY;
const MARVEL_API_KEY = `?&ts=1&apikey=${MARVEL_PUBLIC_KEY}&hash=${MARVEL_HASH_KEY}`;

const MARVEL_URL_BASE = process.env.MARVEL_URL_BASE;
const MARVEL_URL_COMICS = process.env.MARVEL_URL_COMICS;


@Injectable()
export class ComicsService {
  constructor(@InjectModel(Comics.name) private comicModel: Model<Comics>) { }
  
  async fetchComicsApi(): Promise<Comics[]> {
    try {
      const existingComics = await this.comicModel.find().exec();

      if (existingComics.length === 0) {
        const response = await axios.get(`${MARVEL_URL_BASE}${MARVEL_URL_COMICS}${MARVEL_API_KEY}`);
        return this.createComicsFromResponse(response.data.data.results);
      }

      return existingComics;
    } catch (error) {
      throw new NotFoundException(`Erro ao buscar quadrinhos: ${error.message}`);
    }
  }

  async createComicsFromResponse(data): Promise<Comics[]> {
    const comicsToCreate = [];
    try {
      for (const comicsData of data) {
        const comics = new this.comicModel({
          id: comicsData.id,
          title: comicsData.title,
          description: comicsData.description,
          thumbnail: `${comicsData.thumbnail.path}.${comicsData.thumbnail.extension}`,
          // characters: [], // Você pode precisar ajustar isso dependendo de como buscar os dados dos personagens
        });
        comicsToCreate.push(comics);
      }

      return this.comicModel.create(comicsToCreate);
    } catch (error) {
      throw new NotFoundException(`Erro ao criar quadrinhos: ${error.message}`);
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
