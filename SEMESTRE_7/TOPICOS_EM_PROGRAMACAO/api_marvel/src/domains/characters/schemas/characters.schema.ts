import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CharacterSchemaDocument = HydratedDocument<Character>;

@Schema()
export class Character {
    @Prop({ required: true, unique: true })
    id: number;

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    thumbnail: string;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);