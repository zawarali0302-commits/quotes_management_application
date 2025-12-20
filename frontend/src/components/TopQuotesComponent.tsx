import type { QuoteType } from "../types/QuoteType";
import QuoteCardComponent from "./QuoteCardComponent";

interface TopQuotesComponentProps{
  quotes: QuoteType[];
}
const TopQuotesComponent = ({ quotes }: TopQuotesComponentProps) => {
  return (
    <div>
      <h1 className="m-4 font-bold text-2xl">Quotes of the Day</h1>
       <div>
      <ul className="flex flex-wrap justify-center">
        {quotes.filter((quote,index) => index < 3 ).map((quote) => (
          <li key={quote.id}>
            <QuoteCardComponent quote={quote} />
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default TopQuotesComponent
