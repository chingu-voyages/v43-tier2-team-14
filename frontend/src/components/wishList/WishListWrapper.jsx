import { bookStore } from "../../features/bookStore"
import WishListItem from "./WishListItem"
import { AiOutlineHeart } from "react-icons/ai"
import WishEmpty from "./WishEmpty"

export const dummyList = ["item one", "item two", "item three"]

const WishListWrapper = () => {
  const wishList = bookStore((state) => state.wishList)

  return (
    <>
      <h2 className="text-4xl capitalize font-bold my-8">wishlist</h2>

      {wishList.length > 0 ? (
        wishList.map((wishItem) => (
          <div className="wrapper">
            <WishListItem key={wishItem.id} {...wishItem} />
          </div>
        ))
      ) : (
        <>
          <div className="text-6xl">
            <AiOutlineHeart className="mx-auto opacity-10" />
          </div>
          <WishEmpty />
        </>
      )}
    </>
  )
}
export default WishListWrapper

/*   {!wishList.length ? (
          <>
            <div className="text-6xl">
              <AiOutlineHeart className="mx-auto opacity-10" />
            </div>
            <WishEmpty />
          </>
        ) : ( */
