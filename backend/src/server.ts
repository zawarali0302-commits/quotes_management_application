import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import quoteRoutes from './routes/QuoteRoutes';
import { connectDB } from './config/db';


connectDB();
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/quotes', quoteRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});