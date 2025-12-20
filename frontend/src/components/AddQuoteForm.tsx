import { useForm } from "react-hook-form"
import type { QuoteType } from "../types/QuoteType"
interface AddQuoteFormProps {
    addQuote: (quote: QuoteType) => void;
}
const AddQuoteForm = ({ addQuote }: AddQuoteFormProps) => {
    const { register, handleSubmit } = useForm<QuoteType>()
    return (
        <div>
            <h1 className="text-center font-bold underline text-2xl mt-4 mb-2">Add a New Quote</h1>
            <form className="max-w-md border mx-auto rounded p-4" onSubmit={handleSubmit(addQuote)}>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input className="border mx-2 rounded p-2" id="author" {...register("author", { required: true })} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="text">Quote:</label>
                    <textarea className="border rounded px-2" id="text" {...register("text", { required: true })} />
                </div>
                <button className=" bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white mt-2 cursor-pointer" type="submit">Add Quote</button>
            </form>
        </div>
    )
}

export default AddQuoteForm
