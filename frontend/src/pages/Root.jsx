import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { bookStore } from "../features/bookStore"

const Root = () => {
  const getBooks = bookStore((state) => state.getBooks)
  const bookList = bookStore((state) => state.bookList)

  useEffect(() => {
    getBooks()
    console.log(bookList)
  }, [])

  return (
    <main className="pt-14 flex flex-col">
      <Nav />
      <Outlet />
      <Footer />
    </main>
  )
}
export default Root
