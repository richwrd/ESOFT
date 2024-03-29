// Arquivo de configuração do MongoDB
import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect('mongodb://localhost:27017/magicthegathering');
        console.log('Conexão com o MongoDB estabelecida!');
    } catch (error: any) {
        console.error('Erro ao conectar ao MongoDB:', error.message);
        process.exit(1);
    }
};

export default connectDB;
