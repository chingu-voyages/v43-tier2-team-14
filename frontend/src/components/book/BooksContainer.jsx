import { bookStore } from "../../features/bookStore"
import BookCard from "./BookCard"
const BooksContainer = () => {
  const bookList = bookStore((state) => state.bookList)

  return (
    <>
      <section>
        <p className="text-4xl text-center">
          the main book list container lives here
        </p>
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
