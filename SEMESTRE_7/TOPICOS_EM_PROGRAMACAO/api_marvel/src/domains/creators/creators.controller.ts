import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CreatorsService } from './creators.service';
import { CreateCreatorsDto, UpdateCreatorsDto } from './dto/creators.dto';

@Controller('creators')
export class CreatorsController {
  constructor(private readonly creatorsService: CreatorsService) { }

  @Post()
  create(@Body() createCreatorDto: CreateCreatorsDto) {
    try {
      return this.creatorsService.create(createCreatorDto);
    } catch (error) {
      throw new HttpException('Erro ao criar o Criador', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  findAll() {
    try {
      return this.creatorsService.findAll();
    } catch (error) {
      throw new HttpException('Erro ao buscar os criadores', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.creatorsService.findOne(id);
    } catch (error) {
      throw new HttpException('Criador não encontrado', HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreatorDto: UpdateCreatorsDto) {
    try {
      return this.creatorsService.update(id, updateCreatorDto);

    } catch (error) {
      throw new HttpException('Erro ao atualizar o criador', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {

      return this.creatorsService.remove(id);
    } catch (error) {
      throw new HttpException('Erro ao excluir o personagem', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('fetch/json')
  async fetchAndSaveAllCreators(): Promise<void> {
    try {
      return await this.creatorsService.fetchAndSaveAllCreators();
    } catch (error) {
      // Trate o erro de forma apropriada, por exemplo, lançando uma exceção ou retornando uma resposta HTTP adequada
      throw new HttpException('Erro ao buscar os personagens da API da Marvel', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
