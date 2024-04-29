import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types  } from 'mongoose';
import { Series } from 'src/domains/series/schemas/series.schema';

export type CreatorsSchemaDocument = HydratedDocument<Creators>;


@Schema()
export class Creators {
    @Prop({ required: true, unique: true })
    id: number;

    @Prop()
    firtName: string;

    @Prop()
    middleName: string;

    @Prop()
    lastName: string;

    @Prop()
    thumbnail: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Series' }] })
    series: Series[];
}

export const CreatorsSchema = SchemaFactory.createForClass(Creators);