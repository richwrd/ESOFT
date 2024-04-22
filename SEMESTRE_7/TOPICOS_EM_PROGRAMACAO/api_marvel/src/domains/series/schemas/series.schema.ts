import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Comics } from '../../comics/schemas/comics.schema'; // Importe o esquema Comic
import { Character } from '../../characters/schemas/characters.schema'; // Importe o esquema Comic


export type SeriesSchemaDocument = HydratedDocument<Series>;

@Schema()
export class Series {
        @Prop({ required: true, unique: true })
        id: string;

        @Prop()
        title: string;

        @Prop()
        description: string;

        @Prop()
        thumbnail: string;

        @Prop({ type: [{ type: String, ref: 'characters' }] }) // Referência para o esquema Character
        characters: Character[];
    
        @Prop({ type: [{ type: String, ref: 'comics' }] }) // Referência para o esquema Comic
        comics: Comics[];
    }

export const SeriesSchema = SchemaFactory.createForClass(Series);