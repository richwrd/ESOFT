import mongoose from 'mongoose';

interface Card {
    name: string;
    layout?: string;
    vanguard?: string;
    aftermath?: string;
    cmc?: number;
    colors?: string[];
    colorIdentity?: string[];
    type?: string;
    supertypes?: string[];
    types?: string[];
    subtypes?: string[];
    rarity?: string;
    set?: string;
    setName?: string;
    text?: string;
    flavor?: string;
    artist?: string;
    number?: string;
    power?: string;
    toughness?: string;
    loyalty?: string;
    language?: string;
    gameFormat?: string;
    legality?: string;
    page?: number;
    pageSize?: number;
    orderBy?: string;
    random?: boolean;
    contains?: string;
    id?: string;
    multiverseid?: string;
}

const cardSchema = new mongoose.Schema<Card>({
    name: { type: String, required: true },
    layout: { type: String },
    vanguard: { type: String },
    aftermath: { type: String },
    cmc: { type: Number },
    colors: [String],
    colorIdentity: [String],
    type: { type: String },
    supertypes: [String],
    types: [String],
    subtypes: [String],
    rarity: { type: String },
    set: { type: String },
    setName: { type: String },
    text: { type: String },
    flavor: { type: String },
    artist: { type: String },
    number: { type: String },
    power: { type: String },
    toughness: { type: String },
    loyalty: { type: String },
    language: { type: String },
    gameFormat: { type: String },
    legality: { type: String },
    page: { type: Number },
    pageSize: { type: Number },
    orderBy: { type: String },
    random: { type: Boolean },
    contains: { type: String },
    id: { type: String },
    multiverseid: { type: String },
});

const Card = mongoose.model<Card>('Card', cardSchema);

export default Card;
