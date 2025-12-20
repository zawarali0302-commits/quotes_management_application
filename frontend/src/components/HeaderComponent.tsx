
const HeaderComponent = () => {
  return (
    <div className="flex justify-between bg-blue-500 text-white p-4">
      <h1 className="text-2xl">Quotes Management App</h1>

      <ul className="flex items-center gap-6 mr-8">
        {['Home', 'Top Collection', 'About'].map((item) => (
            <li><a href="#">{item}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default HeaderComponent
