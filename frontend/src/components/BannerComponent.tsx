
const BannerComponent = () => {
  return (
    <div className={`flex flex-col items-center justify-center bg-linear-to-r from-blue-500 to-blue-900 h-72  text-white p-4 mt-4 m-10 rounded-2xl`}>
      <h1 className="text-3xl">Welcome to the Quotes Management App</h1>
      <p className="mt-2">Your one-stop solution for managing quotes</p>
    </div>
  )
}

export default BannerComponent
