// app.ts
import express, { Request, Response } from 'express';
import axios from 'axios';
import fs from 'fs';


const app = express();
const PORT = 3003;


// Função para buscar os 100 cards do baralho
export async function getBaralho(): Promise<any> {
    // Aqui você implementaria a lógica para escolher o comandante e buscar os outros 99 cards
    // Neste exemplo, estou simulando um baralho com o comandante "Dina, Soul Steeper" (preto e verde)
    const comandante = 'Dina, Soul Steeper';
    const url = `https://api.scryfall.com/cards/search?q=color%3D${getColorIdentity(comandante)}&unique=prints&lang=pt    `;

    const response = await axios.get(url);
    const cards = response.data.data.slice(0, 99); // Pegar os primeiros 99 cards
    return cards;
}

// Função para obter as cores do comandante
function getColorIdentity(comandante: string): string {
    //'B' e 'G' para um comandante preto e verde
    return 'B,G';
}

// Função para salvar os cards do baralho em um arquivo JSON
function saveBaralhoToFile(baralho: any[]): void {
    const data = JSON.stringify(baralho, null, 2);
    fs.writeFileSync('baralho.json', data);
}

app.get('/baralho', async (req: Request, res: Response) => {
    try {
        // buscar os 100 cards do baralho
        const baralho = await getBaralho();

        // salvar os cards em um arquivo JSON
        saveBaralhoToFile(baralho);        
        
        res.json(baralho);
    } catch (error) {
        console.error('Erro ao buscar baralho:', error);
        res.status(500).json({ error: 'Erro ao buscar baralho' });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
