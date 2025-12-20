
const FooterComponent = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div>
        <footer className="bg-blue-500 text-white text-center p-4 mt-8">
          <p>&copy; {currentYear} Quotes Management App. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default FooterComponent
