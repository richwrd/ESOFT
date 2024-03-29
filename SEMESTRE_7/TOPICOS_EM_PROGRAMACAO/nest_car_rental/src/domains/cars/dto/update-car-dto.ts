import { OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-car-dto';

export class UpdateUserDto extends OmitType(CreateUserDto, ['nome', 'email'] as const) {}