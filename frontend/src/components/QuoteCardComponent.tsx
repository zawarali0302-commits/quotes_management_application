import type { QuoteType } from "../types/QuoteType"

interface QuoteCardComponentProps{
    quote: QuoteType;
}
const QuoteCardComponent = ({ quote }: QuoteCardComponentProps) => {
  return (
    <div className="flex flex-col items-center justify-between border rounded-2xl p-8 shadow m-2 w-96 h-36">
      <p className="italic">{quote.text}</p>
      <h1>~{quote.author}</h1>
    </div>
  )
}

export default QuoteCardComponent
