import GenericBtns from "../components/UI/GenericBtns";
import { IoSearchOutline } from "react-icons/io5";
import { userStore } from "../features/userStore";

const Search = () => {
  const user = userStore((state) => state.user);
  const logout = userStore((state) => state.logout);

  const handleSignIn = async () => {
    localStorage.setItem("isAuthenticated", true);
  };

  const handleLogout = () => {
    console.log(user);
    logout;
    localStorage.removeItem("isAuthenticated");
  };

  console.log(user);
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
          {!user ? (
            <a
              className="flex items-center bg-bg-btn text-text-btn rounded-full px-6 py-2 hover:text-white"
              href={`${import.meta.env.VITE_BACKEND_URL}/auth/google`}
              onClick={handleSignIn}
            >
              Login
            </a>
          ) : (
            <a
              className="flex items-center bg-bg-btn text-text-btn rounded-full px-6 py-2 hover:text-white"
              href={`${import.meta.env.VITE_BACKEND_URL}/auth/logout`}
              onClick={handleLogout}
            >
              Logout
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default Search;
