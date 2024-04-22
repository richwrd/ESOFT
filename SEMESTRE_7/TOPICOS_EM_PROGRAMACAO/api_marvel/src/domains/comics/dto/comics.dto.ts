import { IsInt, IsArray, IsDate, IsString, IsNumber, Validate, IsOptional } from 'class-validator';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, ValidationOptions } from 'class-validator';
import * as fetch from 'node-fetch'; // Certifique-se de instalar o pacote node-fetch usando npm ou yarn

@ValidatorConstraint({ name: 'isImage', async: true })
export class IsImageConstraint implements ValidatorConstraintInterface {
  async validate(url: string, args: ValidationArguments) {
    const maxFileSize = args.constraints[0]; // Obtém o tamanho máximo do arquivo dos argumentos de validação
    try {
      const response = await fetch(url);
      const contentLength = response.headers.get('content-length');
      if (!contentLength) {
        return false; // Se não houver cabeçalho de comprimento de conteúdo, a imagem pode não existir ou ser muito grande
      }
      const fileSizeInBytes = parseInt(contentLength, 10);
      const maxSizeInBytes = maxFileSize * 1024 * 1024; // Converte de MB para bytes
      return fileSizeInBytes <= maxSizeInBytes;
    } catch (error) {
      return false; // Se houver algum erro ao buscar a imagem, considere como inválido
    }
  }

  defaultMessage(args: ValidationArguments) {
    return `A imagem em ${args.property} deve ter no máximo ${args.constraints[0]}MB.`;
  }
}

export class CreateComicsDto {
  @IsInt()
  id: number;

  @IsInt()
  issueNumber: number;
  
  @IsString()
  title: string;
  
  @IsString()
  description: string;
  
  // @IsDate()
  // onsaleDate: Date;

  // @IsNumber()
  // price: number;

  @IsString()
  @IsOptional() // Tornando o campo opcional
  @Validate(IsImageConstraint, [100]) // 50MB max size
  thumbnail: string;
}


export class UpdateComicsDto {
  @IsOptional() // O campo é opcional, pois é um DTO de atualização
  @IsInt()
  id: number;

  @IsOptional() // O campo é opcional, pois é um DTO de atualização
  @IsString()
  name: string;

  @IsOptional() // O campo é opcional, pois é um DTO de atualização
  @IsString()
  description: string;

  @IsOptional() // O campo é opcional, pois é um DTO de atualização
  @IsString()
  @Validate(IsImageConstraint, [100]) // 100MB max size
  thumbnail: string;

  @IsOptional() // O campo é opcional, pois é um DTO de atualização
  @IsArray()
  comics: any[];
}