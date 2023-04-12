import FeaturedBookBody from "./FeaturedBookBody";
import { bookStore } from "../../features/bookStore";

const FeaturedListWrapper = () => {
  const featuredList = bookStore((state) => state.featuredList);

  console.log(featuredList);
  return (
    <div className="w-full md:pr-24 mb-24">
      <h2 className="font-semibold text-center">
        Best Sellers Books For{" "}
        {new Date(featuredList.bestsellers_date).toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </h2>
      <FeaturedBookBody />
    </div>
  );
};

export default FeaturedListWrapper;
