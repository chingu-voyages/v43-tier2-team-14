import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { GiBookshelf } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <aside className="col-start-1 col-end-2 w-16 md:w-24 fixed py-12 border border-r-zinc-300">
      <SidebarItem icon={<AiOutlineHome />} path="/" />
      <SidebarItem icon={<GiBookshelf />} path="/books" />
      <SidebarItem icon={<BsBookmark />} path="/wishlist" />
      <SidebarItem icon={<BiUserCircle />} path="/logIn" />
      <SidebarItem icon={<AiOutlineShoppingCart />} path="/cart" />
    </aside>
  );
};
GiBookshelf;

export default Sidebar;
