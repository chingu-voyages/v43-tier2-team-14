import BookBody from "./BookBody"
import BookImage from "./BookImage"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { bookStore } from "../../features/bookStore"

const Book = () => {
  const single_book_url = "https://www.googleapis.com/books/v1/volumes/"
  const { id } = useParams()
  const [singleBook, setSingleBook] = useState(null)
  const bookList = bookStore((state) => state.bookList)

  const fetchSingleBook = async () => {
    try {
      const res = await fetch(`${single_book_url}${id}`)
      const data = await res.json()
      setSingleBook(data)
      console.log(singleBook)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchSingleBook()
  }, [])

  /*   useEffect(() => {
    const requiredBook = bookList.find((item) => item.id === id)
    setSingleBook(requiredBook)
    console.log(singleBook)
  }, []) */

  /* if (!singleBook) {
    return <p>Loading.....</p>
  } */
  return (
    <section className="mx-auto px-12 lg:px-24">
      {/*   {singleBook.id}
      {singleBook.volumeInfo.title}
      {singleBook.id} */}

      <div className="section-wrapper grid gird-col-1 lg:grid-cols-2 justify-center">
        <BookImage singleBook={singleBook} />
        <BookBody singleBook={singleBook} />
      </div>
    </section>
  )
}

export default Book
