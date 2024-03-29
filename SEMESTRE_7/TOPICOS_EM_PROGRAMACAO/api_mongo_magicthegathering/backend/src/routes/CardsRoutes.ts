import express, { Router } from 'express';
import CardsController from '../controllers/CardsController';

const router: Router = express.Router();

router.get('/', CardsController.getCards);
router.get('/view/:id', CardsController.getCard); // Assumindo que a função correta é getCard, não getCards

export default router;
