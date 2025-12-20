import { Router } from "express";
import QuoteController from "../controllers/QuoteController";

const router = Router();

const quoteController = new QuoteController();

router.get('/', quoteController.getQuotes);
router.post('/', quoteController.addQuote)
router.get('/:id', quoteController.getQuoteById)
router.delete('/:id', quoteController.deleteQuote)
router.put('/:id', quoteController.updateQuote)


export default router;
