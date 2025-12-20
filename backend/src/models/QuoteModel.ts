import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
});


quoteSchema.set('toJSON', {
  transform: (_document: unknown, returnedObject: any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Quote = mongoose.model('Quote', quoteSchema);
export default Quote;
