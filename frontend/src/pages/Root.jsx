import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { bookStore } from "../features/bookStore"

const Root = () => {
  const getBooks = bookStore((state) => state.getBooks)

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <main className="bg-bg-main py-36">
      <Nav />
      <Outlet />
      <Footer />
    </main>
  )
}
export default Root
