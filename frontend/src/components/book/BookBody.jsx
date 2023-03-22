import { BsBookmark } from "react-icons/bs"
import { BsShare } from "react-icons/bs"
import { BsCartPlusFill } from "react-icons/bs"
import { BsDownload } from "react-icons/bs"
import BookBtns from "./BookBtns"
import GenericBtns from "../UI/GenericBtns"

const BookBody = () => {
  return (
    <article className="book-details">
      <h1 className="text-6xl">Book name lives here</h1>
      <div className="auther">dan brown</div>
      <p className="brief-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptas et
        id, aliquam consectetur unde exercitationem culpa veniam eaque
        laudantium ipsum voluptatem similique consequuntur est?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ducimus
        laudantium deleniti esse quas debitis fugiat, error nemo pariatur
        officia dolore dolores qui voluptate explicabo ipsa quidem labore.
        Aliquid ex delectus perspiciatis in soluta quis obcaecati doloremque
        doloribus qui necessitatibus commodi corrupti eligendi iste sunt saepe
        labore id odit unde iure molestiae possimus hic, accusamus
      </p>
      <div className="flex justify-around mt-12">
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
