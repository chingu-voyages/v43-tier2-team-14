import FeaturedBookBody from "./FeaturedBookBody";
import { bookStore } from "../../features/bookStore";

const FeaturedListWrapper = () => {
  const featuredList = bookStore((state) => state.featuredList);

  console.log(featuredList);
  return (
    <div className="w-full">
      <h2 className="mb-10 col-start-1 col-span-full">
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
