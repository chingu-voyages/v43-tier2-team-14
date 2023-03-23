import { BsBookmark } from "react-icons/bs"
import { BsShare } from "react-icons/bs"
import { BsCartPlusFill } from "react-icons/bs"
import { BsDownload } from "react-icons/bs"
import BookBtns from "./BookBtns"
import GenericBtns from "../UI/GenericBtns"

const BookBody = () => {
  const handler = () => {
    console.log("book added to wishlist!")
  }
  return (
    <article className="book-details flex flex-col mt-4 space-y-4">
      <h1 className="text-6xl text-center lg:text-left">
        Book name lives here
      </h1>
      <div className="auther">dan brown</div>
      <p className="brief-desc mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptas et
        id, aliquam consectetur unde exercitationem culpa veniam eaquea
        laudantium ipsum voluptatem similique consequuntur est?
      </p>

      <div className="flex justify-between pt-16">
        <GenericBtns title="add to cart" icon={<BsCartPlusFill />} />
        <div className="flex space-x-4 items-center">
          <BookBtns icon={<BsBookmark />} onClick={handler} />
          <BookBtns icon={<BsShare />} />
          <BookBtns icon={<BsDownload />} />
        </div>
      </div>
    </article>
  )
}
export default BookBody
