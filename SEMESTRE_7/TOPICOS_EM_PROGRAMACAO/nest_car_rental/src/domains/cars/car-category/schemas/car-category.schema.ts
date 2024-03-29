import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
  @Prop({ required: true })
  cpf: number;

  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  sobrenome: string;

  @Prop()
  idade: number;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  telefone: string;

  @Prop({ type: Buffer }) // Propriedade para armazenar a imagem
  image: Buffer;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
