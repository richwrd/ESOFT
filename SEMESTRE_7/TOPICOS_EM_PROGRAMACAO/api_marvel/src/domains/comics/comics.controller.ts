import { Controller, Get, Post, Put, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';
import { ComicsService } from './comics.service';
import { CreateComicsDto, UpdateComicsDto } from './dto/comics.dto';
import { Comics } from './schemas/comics.schema';

@Controller('comics')
export class ComicsController {
  constructor(private readonly comicsService: ComicsService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createComicsDto: CreateComicsDto): Promise<Comics> {
    try {
      return await this.comicsService.create(createComicsDto);
    } catch (error) {
      throw new HttpException('Erro ao criar o quadrinho', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async findAll(): Promise<Comics[]> {
    try {
      return await this.comicsService.findAll();
    } catch (error) {
      throw new HttpException('Erro ao buscar os quadrinhos', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Comics> {
    try {
      return await this.comicsService.findOne(id);
    } catch (error) {
      throw new HttpException('Quadrinho não encontrado', HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body(new ValidationPipe()) updateComicsDto: UpdateComicsDto): Promise<Comics> {
    try {
      return await this.comicsService.update(id, updateComicsDto);
    } catch (error) {
      throw new HttpException('Erro ao atualizar o quadrinho', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Comics> {
    try {
      return await this.comicsService.remove(id);
    } catch (error) {
      throw new HttpException('Erro ao excluir o quadrinho', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
