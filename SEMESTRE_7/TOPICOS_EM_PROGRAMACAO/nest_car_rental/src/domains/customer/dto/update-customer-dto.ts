import { OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-customer-dto';

export class UpdateUserDto extends OmitType(CreateUserDto, ['nome', 'email'] as const) {}