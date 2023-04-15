import Loginbtn from "../user/LoginBtn";
import Logoutbtn from "../user/LogoutBtn";
import Userdata from "../user/UserData";
import Search from "./Search";
import { userStore } from "../../features/userStore";

const SearchWrapper = () => {
  const user = userStore((state) => state.user);

  return (
    <div className="col-start-3 col-span-full row-start-1 row-end-2 w-full mt-5 ">
      <div className="flex justify-between items-center">
        <Search />
        <div className="px-5">
          {!user ? (
            <Loginbtn />
          ) : (
            <div className="flex items-center h-4 gap-6">
              <Userdata />
              <Logoutbtn />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default SearchWrapper;
