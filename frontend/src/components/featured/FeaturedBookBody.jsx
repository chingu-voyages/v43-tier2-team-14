import { bookStore } from "../../features/bookStore";
import FeaturedList from "./FeaturedList";

const FeaturedBookBody = () => {
  const featuredList = bookStore((state) => state.featuredList);
  // const list = featuredList.lists[0];
  const { lists } = featuredList;
  return (
    <div className="wrapper">
      {lists?.map((list) => {
        return (
          <div key={list.list_name} className="flex flex-wrap justify-center">
            <h1 className="bg-red-300 rounded-lg text-center mt-12 mb-5 hover:bg-red-400 transition-all duration-500 px-7 py-3 cursor-pointer">
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
