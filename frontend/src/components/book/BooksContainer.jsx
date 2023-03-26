import { Link } from "react-router-dom"
import { bookStore } from "../../features/bookStore"
import BookCard from "./BookCard"
const BooksContainer = () => {
  const bookList = bookStore((state) => state.bookList)
  return (
    <>
      <section>
        <Link to="/wishlist" className="bg-red-700 text-white p-2 rounded-sm">
          wishlist
        </Link>
        <h2 className="capitalize text-4xl text-center my-4">
          the main book list container lives here
        </h2>
        <div className="wrapper grid grid-cols-3 gap-12 ">
          {bookList.map((bookCard) => {
            return <BookCard key={bookCard.id} {...bookCard} />
          })}
        </div>
      </section>
    </>
  )
}
export default BooksContainer
