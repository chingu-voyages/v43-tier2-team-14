import { bookStore } from "../../features/bookStore";
import FeaturedList from "./FeaturedList";

const FeaturedBookBody = () => {
  const featuredList = bookStore((state) => state.featuredList);
  console.log(featuredList);
  // const list = featuredList.lists[0];
  return (
    <div>
      {featuredList.lists.map((list) => {
        return (
          <div className="flex flex-row flex-wrap w-[250px]">
            <h1 className="bg-red-300 rounded-lg text-center my-10 hover:bg-red-400 transition-all duration-500 px-7 py-3 cursor-pointer">
              {list.list_name}
            </h1>
            <FeaturedList key={list.list_id} list={list} />
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedBookBody;
