import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ComicsSchemaDocument = HydratedDocument<Comics>;

@Schema()
export class Comics {
        @Prop({ required: true, unique: true })
        id: number;
    
        @Prop()
        title: string;

        @Prop()
        description: string;
        
        @Prop()
        thumbnail: string;
    }

export const ComicsSchema = SchemaFactory.createForClass(Comics);