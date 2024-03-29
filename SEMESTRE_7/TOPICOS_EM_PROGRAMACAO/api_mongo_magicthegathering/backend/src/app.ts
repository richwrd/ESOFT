// CONFIGURAÇÕES GERAIS DO APLICATIVO

import express from 'express';
import connectDB from './config/db'; 
import CardsRoutes from './routes/CardsRoutes';

const app = express();

// Função de conexão com o MongoDB
connectDB();

// Habilita o CORS para todas as origens
// app.use(cors());

// Middleware para processar JSON
app.use(express.json());

// Rota para produtos
app.use('/cards', CardsRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor backend rodando na porta ${PORT}`);
});


