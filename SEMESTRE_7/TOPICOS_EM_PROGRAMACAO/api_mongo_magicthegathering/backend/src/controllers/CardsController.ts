import Cards from '../models/CardsModel';
import { Request, Response } from 'express';

export default class CardsController {

    static async createCards(req: Request, res: Response): Promise<void> {
        try {
            const { userId, produtos, total } = req.body; // Supondo que você tenha o ID do usuário no corpo da requisição
            const Card = new Cards({ userId, produtos, total});
            await Card.save();
            res.status(201).json(Card);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async getCards(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const Card = await Cards.findById(id).lean();
            if (!Card) {
                res.status(404).json({ error: 'Card não encontrado' });
                return;
            }
            res.json(Card);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async getCard(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const Card = await Cards.findByIdAndDelete(id).lean();
            if (!Card) {
                res.status(404).json({ error: 'Card não encontrado' });
                return;
            }
            res.json({ message: 'Card excluído com sucesso' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}
