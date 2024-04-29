import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

import { Comics } from '../../comics/schemas/comics.schema'; // Importe o esquema Comic
import { Characters } from '../../characters/schemas/characters.schema'; // Importe o esquema Comic


export type SeriesSchemaDocument = HydratedDocument<Series>;

@Schema()
export class Series {
        @Prop({ required: true, unique: true })
        id: number;

        @Prop()
        title: string;

        @Prop()
        description: string;

        @Prop()
        thumbnail: string;

        @Prop({ type: [{ type: String, ref: 'Characters' }] }) // Referência para o esquema Character
        characters: Characters[];

        @Prop({ type: [Types.ObjectId], ref: 'Comics' })
        comics: Comics[];
    }

export const SeriesSchema = SchemaFactory.createForClass(Series);