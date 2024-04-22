import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CashBox extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  amount: number;

  @Prop()
  description: string;
}

export const CashBoxSchema = SchemaFactory.createForClass(CashBox);
