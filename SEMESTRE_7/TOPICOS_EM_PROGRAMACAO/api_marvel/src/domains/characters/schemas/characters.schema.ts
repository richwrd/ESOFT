import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types  } from 'mongoose';

import { Series } from '../../series/schemas/series.schema';

export type CharactersSchemaDocument = HydratedDocument<Characters>;


@Schema()
export class Characters {
    @Prop({ required: true, unique: true })
    id: number;

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    thumbnail: string;

    @Prop({ type: [Types.ObjectId], ref: 'Series' })
    series: Series[];
}

export const CharactersSchema = SchemaFactory.createForClass(Characters);