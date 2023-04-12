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
    logout;
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <div className="col-start-3 col-span-full row-start-1 row-end-2 w-full mt-5 ">
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
            <div className="flex items-center h-4 gap-6">
              <a
                className="flex items-center bg-bg-btn text-text-btn rounded-full px-6 py-2 hover:text-white"
                href={`${import.meta.env.VITE_BACKEND_URL}/auth/google`}
                onClick={handleSignIn}
              >
                Login
              </a>
            </div>
          ) : (
            <div className="flex items-center h-4 gap-6">
              <div className="flex justify-center items-center gap-3">
                <img
                  className="rounded-full h-10"
                  src={user?.picture}
                  alt="user_pic"
                />
                <h2 className="font-semibold">{user?.name}</h2>
              </div>
              <a
                className="flex items-center bg-bg-btn text-text-btn rounded-full px-6 py-2  hover:text-white"
                href={`${import.meta.env.VITE_BACKEND_URL}/auth/logout`}
                onClick={handleLogout}
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Search;
