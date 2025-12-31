interface HeaderComponentProps{
  handleOpenForm: () => void;
}
const HeaderComponent = ({handleOpenForm}: HeaderComponentProps) => {
  return (
    <div className="flex justify-between bg-linear-to-r  from-blue-500 to-blue-900 text-white p-4 sticky z-10">
      <h1 className="text-2xl font-bold">Quotes Management App</h1>

      <ul className="flex items-center gap-6 mr-8">
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li onClick={handleOpenForm} className="bg-linear-to-tl from-blue-500 to-blue-900 hover:bg-linear-to-bl cursor-pointer px-4 py-2 rounded" >Add Quote</li>
      </ul>
    </div>
  )
}

export default HeaderComponent
