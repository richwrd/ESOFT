import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  sobrenome: string;

  @Prop()
  idade: number;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  senha: string;

  @Prop({ type: Buffer }) // Propriedade para armazenar a imagem
  image: Buffer;
}

export const UserSchema = SchemaFactory.createForClass(User);
