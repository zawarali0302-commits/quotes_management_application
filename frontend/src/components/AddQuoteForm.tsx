import { useForm } from "react-hook-form"
import type { QuoteType } from "../types/QuoteType"
interface AddQuoteFormProps {
    addQuote: (quote: QuoteType) => void;
    handleCloseForm: () => void;
}
const AddQuoteForm = ({ addQuote, handleCloseForm }: AddQuoteFormProps) => {
    const { register, handleSubmit } = useForm<QuoteType>()
    return (
        <div className="bg-linear-to-bl from-slate-100 to-slate-300 border border-slate-300 shadow-2xl rounded-xl p-2 relative">
            <h1 className="text-center font-bold underline text-2xl mt-4 mb-2">Add a New Quote</h1>
            <form className="rounded p-4 w-96 h-80" onSubmit={handleSubmit(addQuote)}>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input className="border mx-2 rounded p-2" id="author" {...register("author", { required: true })} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="text">Quote:</label>
                    <textarea className="border h-40 rounded px-2" id="text" {...register("text", { required: true })} />
                </div>
                <button className=" bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white mt-4 cursor-pointer" type="submit">Add Quote</button>
            </form>
            <button onClick={handleCloseForm} className="bg-red-400 hover:bg-red-500 p-1 px-2 rounded absolute top-2 right-2">X</button>
        </div>
    )
}

export default AddQuoteForm
