import { Controller, Get, Post, Put, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';
import { CharacterService } from './characters.service';
import { CreateCharacterDto, UpdateCharacterDto } from './dto/characters.dto';
import { Character } from './schemas/characters.schema';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createCharacterDto: CreateCharacterDto): Promise<Character> {
    try {
      return await this.characterService.create(createCharacterDto);
    } catch (error) {
      throw new HttpException('Erro ao criar o personagem', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async findAll(): Promise<Character[]> {
    try {
      return await this.characterService.findAll();
    } catch (error) {
      throw new HttpException('Erro ao buscar os personagens', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Character> {
    try {
      return await this.characterService.findOne(id);
    } catch (error) {
      throw new HttpException('Personagem não encontrado', HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body(new ValidationPipe()) updateCharacterDto: UpdateCharacterDto): Promise<Character> {
    try {
      return await this.characterService.update(id, updateCharacterDto);
    } catch (error) {
      throw new HttpException('Erro ao atualizar o personagem', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Character> {
    try {
      return await this.characterService.remove(id);
    } catch (error) {
      throw new HttpException('Erro ao excluir o personagem', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  @Get('fetch')
  async fetchCharactersApi(): Promise<Character[]> {
    try {
      return await this.characterService.fetchCharactersApi();
    } catch (error) {
      // Trate o erro de forma apropriada, por exemplo, lançando uma exceção ou retornando uma resposta HTTP adequada
      throw new HttpException('Erro ao buscar os personagens da API da Marvel', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
}
