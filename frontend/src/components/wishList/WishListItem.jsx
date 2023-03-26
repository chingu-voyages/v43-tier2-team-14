import { CiBookmarkRemove } from "react-icons/ci"
import { bookStore } from "../../features/bookStore"

const WishListItem = ({
  title,
  id,
  pageCount,
  authors,
  description,
  imageLinks,
}) => {
  const removeFromWishlist = bookStore((state) => state.removeFromWishlist)

  const removeItemFromWishlist = (id) => {
    removeFromWishlist(id)
  }

  return (
    <article className="w-full md:w-3/4 mx-auto shadow-md bg-zinc-100 flex justify-between items-center mb-6 p-4 border-2 rounded-md hover:shadow-sm ">
      <img src={imageLinks.thumbnail} alt="" />
      <h2>{title}</h2>
      <span>{authors}</span>
      <p>{pageCount} pages</p>
      <div
        className="cursor-pointer text-3xl duration-300 hover:text-white hover:bg-bg-btn"
        onClick={() => removeItemFromWishlist(id)}
      >
        <CiBookmarkRemove />
      </div>
    </article>
  )
}
export default WishListItem
