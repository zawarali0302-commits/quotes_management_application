import Quote from "../models/QuoteModel";
import { Request, Response } from 'express';

class QuoteController {
    async getQuotes(req: Request, res: Response) {
        try {
            const quotes = await Quote.find();
            res.status(200).json(quotes);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async addQuote(req: Request, res: Response) {
        const { text, author } = req.body;
        const quote = new Quote({ text, author });
        try {
            await quote.save();
            res.status(201).json(quote);
        } catch (error) {
            res.status(400).json({ error: 'Bad request' });
        }
    }
    async getQuoteById(req: Request, res: Response) {
        const quoteId = req.params.id;
        try {
            const quote = await Quote.findById(quoteId);
            if (!quote) {
                return res.status(404).json({ error: 'Quote not found' });
            }
            res.status(200).json(quote);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async deleteQuote(req: Request, res: Response) {
        const quoteId = req.params.id;
        try {
            const deletedQuote = await Quote.findByIdAndDelete(quoteId);
            if (!deletedQuote) {
                return res.status(404).json({ error: 'Quote not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async updateQuote(req: Request, res: Response) {
        const quoteId = req.params.id;
        const { text, author } = req.body;
        try {
            const updatedQuote = await Quote.findByIdAndUpdate(quoteId, { text, author }, { new: true });
            if (!updatedQuote) {
                return res.status(404).json({ error: 'Quote not found' });
            }
            res.status(200).json(updatedQuote);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
}  

}

export default QuoteController;