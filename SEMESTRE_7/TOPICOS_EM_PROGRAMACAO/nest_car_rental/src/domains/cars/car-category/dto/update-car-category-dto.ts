import { OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-car-category-dto';

export class UpdateUserDto extends OmitType(CreateUserDto, ['nome', 'email'] as const) {}