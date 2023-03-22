import HomeBtn from "../components/UI/HomeBtn"
import WishList, { dummyList } from "../components/WishList"
import { AiOutlineHeart } from "react-icons/ai"
import WishEmpty from "../components/WishEmpty"

const WishlistPage = () => {
  return (
    <>
      <section className="mx-auto w-[50%]">
        {dummyList.length === 0 ? (
          <>
            <div className="text-6xl">
              <AiOutlineHeart className="mx-auto opacity-10" />
            </div>
            <WishEmpty />
          </>
        ) : (
          <WishList />
        )}
        <HomeBtn />
      </section>
    </>
  )
}
export default WishlistPage
