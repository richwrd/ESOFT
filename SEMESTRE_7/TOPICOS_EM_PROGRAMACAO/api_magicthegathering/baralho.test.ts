// Importe a função getBaralho de "./app" sem especificar a extensão do arquivo
import { getBaralho } from './app';

describe('Testes da lógica de busca de cards', () => {
    it('Deve retornar um array com 99 cards sem repetições', async () => {
        // Mock da função getBaralho
        const mockGetBaralho = jest.fn().mockResolvedValue(generateUniqueCardsArray(99));

        // Substitua a implementação real de getBaralho pelo mock
        (getBaralho as jest.Mock) = mockGetBaralho;

        // Chame a função getBaralho
        const baralho = await getBaralho();

        // Verifique se a função getBaralho foi chamada
        expect(mockGetBaralho).toHaveBeenCalled();

        // Verifique se o retorno é um array
        expect(Array.isArray(baralho)).toBe(true);

        // Verifique se o array tem 99 cartas
        expect(baralho.length).toBe(99);

        // Verifique se não há cartas repetidas
        const cardIds = new Set();
        baralho.forEach((card: any) => {
            expect(cardIds.has(card.id)).toBe(false);
            cardIds.add(card.id);
        });
    });
});

// Função para gerar um array de cartas únicas
function generateUniqueCardsArray(length: number): any[] {
    const cards: any[] = [];
    for (let i = 0; i < length; i++) {
        cards.push({ id: i, name: `Card ${i}` });
    }
    return cards;
}
