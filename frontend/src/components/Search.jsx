import GenericBtns from "../components/UI/GenericBtns";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="col-start-3 col-span-full row-start-1 w-full py-5">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-3 w-[50%]">
          <IoSearchOutline className="text-2xl" />
          <input
            type="text"
            placeholder="Search book name, author, edition ...."
            className="w-[50%] py-3 outline-none border-none bg-transparent"
          />
        </div>

        <div className="px-5">
          <button className="flex items-center bg-bg-btn text-text-btn rounded-full px-6 py-2 hover:text-white">
            <a href={`${import.meta.env.VITE_BACKEND_URL}/auth/google`}>
              Login
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Search;
