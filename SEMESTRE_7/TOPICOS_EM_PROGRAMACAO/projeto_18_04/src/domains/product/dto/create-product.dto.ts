import { IsString, IsInt, IsNumber, Min, Max} from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsInt()
  @Min(2)
  @Max(1000)
  quantity: number;
}
