import { NavLink } from "react-router-dom"

const SidebarItem = ({ path, icon }) => {
  return (
    <NavLink to={path} className="flex mb-8">
      <span className="flex justify-center items-center mx-auto w-fit text-3xl p-3 duration-300 rounded-full hover:text-white hover:bg-red-500">
        {icon}
      </span>
    </NavLink>
  )
}
export default SidebarItem
