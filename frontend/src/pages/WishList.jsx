import HomeBtn from "../components/UI/HomeBtn";
import WishListWrapper from "../components/wishList/WishListWrapper";

const WishList = () => {
  return (
    <section className="text-start col-start-3 col-span-full">
      <WishListWrapper />
      <HomeBtn />
    </section>
  );
};
export default WishList;
