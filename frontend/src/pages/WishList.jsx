import HomeBtn from "../components/UI/HomeBtn"
import WishListWrapper, {
  dummyList,
} from "../components/wishList/WishListWrapper"
import { AiOutlineHeart } from "react-icons/ai"
import WishEmpty from "../components/wishList/WishEmpty"

const WishList = () => {
  return (
    <>
      <section className="text-center">
        {dummyList.length === 0 ? (
          <>
            <div className="text-6xl">
              <AiOutlineHeart className="mx-auto opacity-10" />
            </div>
            <WishEmpty />
          </>
        ) : (
          <WishListWrapper />
        )}
        <HomeBtn />
      </section>
    </>
  )
}
export default WishList
