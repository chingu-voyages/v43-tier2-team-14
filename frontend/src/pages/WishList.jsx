import HomeBtn from "../components/UI/HomeBtn";
import WishListWrapper from "../components/wishList/WishListWrapper";
import { bookStore } from "../features/bookStore";

const WishList = () => {
  return (
      <section className="text-start col-start-3 col-span-full">
        <WishListWrapper />
        <HomeBtn />
      </section>
  );
};
export default WishList;
