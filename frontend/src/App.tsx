import { useEffect, useState } from "react"
import type { QuoteType } from "./types/QuoteType"
import QuotesListComponent from "./components/QuotesListComponent";
import HeaderComponent from "./components/HeaderComponent";
import AddQuoteForm from "./components/AddQuoteForm";
import TopQuotesComponent from "./components/TopQuotesComponent";
import BannerComponent from "./components/BannerComponent";
import FooterComponent from "./components/FooterComponent";
import { set } from "react-hook-form";

function App() {
  const [quotes, setQuotes] = useState<QuoteType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('http://localhost:3000/api/quotes')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setQuotes(data)
    } catch (error) {
      console.error("Error fetching data", error);
      setError("Error fetching quotes, try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    document.title = "Quotes Management App";
    fetchData()
  }, [])

  const handleAddQuote = async (quote: QuoteType) => {
    try {
      const response = await fetch('http://localhost:3000/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quote),
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      fetchData()
    } catch (error) {
      console.error("Error adding quote", error);
      setError("Error adding quote, try again later.")
    }
  }

  const handleDeleteQuote = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/quotes/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      setQuotes(quotes.filter(quote => quote.id !== id));
    } catch (error) {
      console.error("Error deleting quote", error);
      setError("Error deleting quote, try again later.")
    }
  }

const handleEditQuote = async (id: number, updatedQuote: QuoteType) => {
    try {
      const response = await fetch(`http://localhost:3000/api/quotes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedQuote),
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      fetchData()
    } catch (error) {
      console.error("Error editing quote", error);
      setError("Error editing quote, try again later.")
    }
  }


  const handleRefresh = () => {
    fetchData();
  }   

  return (
    <>
      <HeaderComponent />
      <BannerComponent />
      <TopQuotesComponent quotes={quotes} />
      <AddQuoteForm addQuote = {handleAddQuote}/>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <QuotesListComponent quotes={quotes} deleteQuote={handleDeleteQuote} refresh={handleRefresh} editQuote={handleEditQuote} />
      <FooterComponent />
    </>
  )
}

export default App
