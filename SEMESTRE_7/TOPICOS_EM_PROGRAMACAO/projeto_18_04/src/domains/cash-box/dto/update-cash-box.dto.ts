import { PartialType } from '@nestjs/mapped-types';
import { CreateCashBoxDto } from './create-cash-box.dto';

export class UpdateCashBoxDto extends PartialType(CreateCashBoxDto) {}
