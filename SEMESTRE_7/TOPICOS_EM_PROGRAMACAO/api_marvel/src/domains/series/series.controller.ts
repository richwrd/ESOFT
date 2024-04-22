import { Controller, Get, Post, Put, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';
import { SeriesService } from './series.service';
import { CreateSeriesDto, UpdateSeriesDto } from './dto/series.dto';
import { Series } from './schemas/series.schema';

@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createSeriesDto: CreateSeriesDto): Promise<Series> {
    try {
      return await this.seriesService.create(createSeriesDto);
    } catch (error) {
      throw new HttpException('Erro ao criar a série', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async findAll(): Promise<Series[]> {
    try {
      return await this.seriesService.findAll();
    } catch (error) {
      throw new HttpException('Erro ao buscar as séries', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Series> {
    try {
      return await this.seriesService.findOne(id);
    } catch (error) {
      throw new HttpException('Série não encontrada', HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body(new ValidationPipe()) updateSeriesDto: UpdateSeriesDto): Promise<Series> {
    try {
      return await this.seriesService.update(id, updateSeriesDto);
    } catch (error) {
      throw new HttpException('Erro ao atualizar a série', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Series> {
    try {
      return await this.seriesService.remove(id);
    } catch (error) {
      throw new HttpException('Erro ao excluir a série', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('fetch')
  async fetchSeriesApi(): Promise<Series[]> {
    try {
      return await this.seriesService.fetchSeriesApi();
    } catch (error) {
      // Trate o erro de forma apropriada, por exemplo, lançando uma exceção ou retornando uma resposta HTTP adequada
      throw new HttpException('Erro ao buscar as séries da API da Marvel', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
