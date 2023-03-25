import { BsBookmark } from "react-icons/bs"
import { BsShare } from "react-icons/bs"
import { BsCartPlusFill } from "react-icons/bs"
import { BsDownload } from "react-icons/bs"
import BookBtns from "./BookBtns"
import GenericBtns from "../UI/GenericBtns"

const BookBody = ({ singleBook: { title, description, pageCount } }) => {
  console.log(pageCount)

  return (
    <article className="book-details flex flex-col mt-4 space-y-4">
      <h2 className="text-6xl text-center lg:text-left">{title}</h2>
      <div className="author">dan brown</div>
      <p className="brief-desc mb-12">{description}</p>
      <span>{pageCount}</span>

      <div className="flex justify-between pt-16">
        <GenericBtns title="add to cart" icon={<BsCartPlusFill />} />
        <div className="flex space-x-4 items-center">
          <BookBtns icon={<BsBookmark />} />
          <BookBtns icon={<BsShare />} />
          <BookBtns icon={<BsDownload />} />
        </div>
      </div>
    </article>
  )
}
export default BookBody
