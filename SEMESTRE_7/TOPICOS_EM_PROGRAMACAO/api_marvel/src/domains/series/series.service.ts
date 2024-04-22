import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';

import { CreateSeriesDto, UpdateSeriesDto } from './dto/series.dto';
import { Series } from './schemas/series.schema';


const MARVEL_PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;
const MARVEL_HASH_KEY = process.env.MARVEL_HASH_KEY;
const MARVEL_API_KEY = `?&ts=1&apikey=${MARVEL_PUBLIC_KEY}&hash=${MARVEL_HASH_KEY}`;

const MARVEL_URL_BASE = process.env.MARVEL_URL_BASE;
const MARVEL_URL_SERIES = process.env.MARVEL_URL_SERIES;

@Injectable()
export class SeriesService {
  constructor(@InjectModel(Series.name) private seriesModel: Model<Series>) { }


  async fetchSeriesApi(): Promise<Series[]> {
    try {
      let allSeries: Series[] = [];
  
      // Iniciar com o offset 0
      let offset = 0;
      const limit = 20; // Limite por página
  
      // Continuar até que todos os resultados sejam recuperados
      while (true) {
        const response = await axios.get(`${MARVEL_URL_BASE}${MARVEL_URL_SERIES}${MARVEL_API_KEY}&offset=${offset}&limit=${limit}`);
        const results = response.data.data.results;

        console.log(results)
  
        // Se não houver mais resultados, pare o loop
        if (results.length === 0) {
          break;
        }
  
        // Adicione os resultados atuais à lista geral de séries
        allSeries = allSeries.concat(results);
  
        // Ajuste o offset para a próxima página
        offset += limit;
      }
  
      // Salvar todas as séries encontradas no banco de dados
      return this.createSeriesFromResponse(allSeries);
    } catch (error) {
      throw new NotFoundException(`Erro ao buscar séries pela URL: ${error.message}`);
    }
  }
  
  async createSeriesFromResponse(data): Promise<Series[]> {
    const seriesToCreate = [];
    try {
      for (const seriesData of data) {
        const series = new this.seriesModel({
          id: seriesData.id,
          name: seriesData.name,
          description: seriesData.description,
          thumbnail: `${seriesData.thumbnail.path}.${seriesData.thumbnail.extension}`,
          // comics: [], // Você pode precisar ajustar isso dependendo de como buscar os dados dos quadrinhos
        });
        seriesToCreate.push(series);
      }

      return this.seriesModel.create(seriesToCreate);
    } catch (error) {
      throw new NotFoundException(`Erro ao criar séries: ${error.message}`);
    }
  }
  
  async create(createSeriesDto: CreateSeriesDto): Promise<Series> {
    const createdSeries = new this.seriesModel(createSeriesDto);
    return createdSeries.save();
  }

  async findAll(): Promise<Series[]> {
    return this.seriesModel.find().exec();
  }

  async findOne(id: number): Promise<Series> {
    const series = await this.seriesModel.findById(id).exec();
    if (!series) {
      throw new NotFoundException(`Série com o ID ${id} não encontrada`);
    }
    return series;
  }

  async update(id: number, updateSeriesDto: UpdateSeriesDto): Promise<Series> {
    const existingSeries = await this.seriesModel.findByIdAndUpdate(id, updateSeriesDto, { new: true }).exec();
    if (!existingSeries) {
      throw new NotFoundException(`Série com o ID ${id} não encontrada`);
    }
    return existingSeries;
  }

  async remove(id: number): Promise<Series> {
    const deletedSeries = await this.seriesModel.findByIdAndDelete(id).exec();
    if (!deletedSeries) {
      throw new NotFoundException(`Série com o ID ${id} não encontrada`);
    }
    return deletedSeries;
  }
}
