import HomeBtn from "../components/UI/HomeBtn"
import WishListWrapper from "../components/wishList/WishListWrapper"
import { bookStore } from "../features/bookStore"

const WishList = () => {
  return (
    <>
      <section className="text-center">
        <WishListWrapper />
        <HomeBtn />
      </section>
    </>
  )
}
export default WishList
