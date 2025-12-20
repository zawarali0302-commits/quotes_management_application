import type { QuoteType } from "../types/QuoteType"

interface QuotesListComponentProps {
  quotes: QuoteType[];
  deleteQuote: (id: number) => void;
  refresh: () => void;
  editQuote: (id:number, updatedQuote:QuoteType) => void;
}
const QuotesListComponent = ({ quotes, deleteQuote, refresh, editQuote }: QuotesListComponentProps) => {
  return (
    <div className="p-4">
      <div className="flex justify-between p-2">
      <h1 className="font-bold text-2xl mb-4">List of All Quotes</h1>
      <button onClick={refresh} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded">Refresh</button>
      </div>
      <table className="border-collapse border rounded-2xl border-slate-400 w-full">
        <thead className="border border-collapse bg-gray-200" >
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Quotes</th>
            <th className="px-4 py-2">Authors</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote, i) => (
            <tr key={quote.id}>
              <td className="text-center">{i + 1}</td>
              <td className="text-left px-4 italic">{quote.text}</td>
              <td className="text-center">{quote.author}</td>
              <td className="text-center">
                <button onClick={() => editQuote(quote.id, { ...quote })} className="bg-green-500 hover:bg-green-600 cursor-pointer text-white px-4 py-2 rounded">Edit</button>
                <button onClick={() => deleteQuote(quote.id)} className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-4 py-2 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default QuotesListComponent
