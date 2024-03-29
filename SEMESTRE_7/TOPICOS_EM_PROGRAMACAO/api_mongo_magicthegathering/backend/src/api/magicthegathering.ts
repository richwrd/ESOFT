interface Card {
    id: string;
}

interface ErrorResponse {
    status: number;
    error: string;
}

export async function getCardsByName(cardName: string): Promise<Card[] | ErrorResponse> {
    const response = await fetch(
        `https://api.magicthegathering.io/v1/cards?name=${cardName}&contains=imageUrl&pagesize=15&orderby=name`
    );

    if (response.status === 200) {
        return await response.json() as Card[];
    } else {
        const errorMessage = await response.json() as ErrorResponse;
        return errorMessage;
    }
}

export async function getRandomCards(): Promise<Card[] | ErrorResponse> {
    const response = await fetch(
        `https://api.magicthegathering.io/v1/cards?contains=imageUrl&pagesize=15&orderby=name&random=true`
    );

    if (response.status === 200) {
        return await response.json() as Card[];
    } else {
        const errorMessage = await response.json() as ErrorResponse;
        return errorMessage;
    }
}

export async function getCardById(cardId: string): Promise<Card | ErrorResponse> {
    const response = await fetch(`https://api.magicthegathering.io/v1/cards?id=${cardId}`);

    if (response.status === 200) {
        return await response.json() as Card;
    } else {
        const errorMessage = await response.json() as ErrorResponse;
        return errorMessage;
    }
}
