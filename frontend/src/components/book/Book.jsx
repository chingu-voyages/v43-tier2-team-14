import BookBody from "./BookBody"
import BookImage from "./BookImage"

const Book = () => {
  return (
    <section className="mx-auto pr-48 pl-48">
      <div className="section-wrapper grid grid-cols-2 justify-center">
        <BookImage />
        <BookBody />
      </div>
    </section>
  )
}

export default Book
