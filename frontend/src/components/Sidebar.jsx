import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GiBookshelf } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <aside className="col-start-1 col-end-2 row-start-1 row-span-full py-36 border border-r-2 border-r-zinc-400">
      <SidebarItem icon={<AiOutlineHome />} path="/" />
      <SidebarItem icon={<BsBookmark />} path="/wishlist" />
      <SidebarItem icon={<GiBookshelf />} path="/books" />
      <SidebarItem icon={<AiOutlineShoppingCart />} path="/cart" />
      <SidebarItem icon={<BiUserCircle />} path="/logIn" />
      <SidebarItem icon={<FiSettings />} path="/register" />
    </aside>
  );
};
GiBookshelf;

export default Sidebar;
