import { useState, useEffect } from "react"
import { bookStore } from "../../features/bookStore"
import BookBody from "./BookBody"
import BookImage from "./BookImage"

const Book = () => {
  const bookList = bookStore((state) => state.bookList)
  console.log(bookList)

  return (
    <section className="mx-auto px-12 lg:px-24">
      <div className="section-wrapper grid gird-col-1 lg:grid-cols-2 justify-center">
        <BookImage />
        <BookBody {...bookList} />
      </div>
    </section>
  )
}

export default Book
