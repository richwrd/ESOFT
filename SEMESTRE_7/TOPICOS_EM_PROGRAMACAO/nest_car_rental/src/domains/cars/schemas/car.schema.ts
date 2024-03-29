import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<Car>;

@Schema()
export class Car {
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

export const CarSchema = SchemaFactory.createForClass(Car);
