import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import axios from 'axios';
import * as fs from 'fs';


import { CreateSeriesDto, UpdateSeriesDto } from './dto/series.dto';
import { Series } from './schemas/series.schema';

@Injectable()
export class SeriesService {

  constructor(@InjectModel(Series.name) private seriesModel: Model<Series>,
    private configService: ConfigService,
  ) { }


  async fetchAndSaveAllSeries(): Promise<void> {

    const limit = 100; // Limite por página
    let offset = 0;
    let allSeries: any[] = [];
    try {


      const MARVEL_PUBLIC_KEY = this.configService.get<string>('MARVEL_PUBLIC_KEY');
      const MARVEL_HASH_KEY = this.configService.get<string>('MARVEL_HASH_KEY');
      const MARVEL_API_KEY = `?ts=1&apikey=${MARVEL_PUBLIC_KEY}&hash=${MARVEL_HASH_KEY}`;

      const MARVEL_URL_BASE = this.configService.get<string>('MARVEL_URL_BASE');
      const MARVEL_URL_SERIES = this.configService.get<string>('MARVEL_URL_SERIES');

      
      while (true) {
        const url = `${MARVEL_URL_BASE}${MARVEL_URL_SERIES}${MARVEL_API_KEY}&offset=${offset}&limit=${limit}`;
  
        const response = await axios.get(url, { timeout: 3600000 });
  
        const results = response.data.data.results;
  
        allSeries = allSeries.concat(results);
  
        // Verificar se há mais páginas disponíveis
        if (!response.data.data.next) {
          break;
        }
  
        // Ajuste o offset para a próxima página
        offset += limit;
      }

      // Salvar todos os dados das séries em um arquivo JSON
      fs.writeFileSync('all_series.json', JSON.stringify(allSeries, null, 2));
    } catch (error) {
      console.error(`Erro ao buscar e salvar séries: ${error.message}`);
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
