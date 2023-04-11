import { useEffect } from "react";
import { bookStore } from "../../features/bookStore";
import FeaturedListWrapper from "./FeaturedListWrapper";

const Featured = () => {
  const featuredList = bookStore((state) => state.featuredList);
  const getFeatured = bookStore((state) => state.getFeatured);

  useEffect(() => {
    getFeatured();
    console.log(featuredList);
  }, []);
  return <FeaturedListWrapper />;
};

export default Featured;
