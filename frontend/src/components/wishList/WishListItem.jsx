import { CiBookmarkRemove } from "react-icons/ci"

const WishListItem = ({ b }) => {
  return (
    <article className="w-full md:w-3/4 mx-auto shadow-md bg-zinc-100 flex justify-between items-center mb-6 p-4 border-2 rounded-md hover:shadow-sm ">
      <h2 className="title">book name: {b}</h2>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugit neque
        quas iure nostrum? Optio?
      </p>
      <div className="cursor-pointer text-3xl duration-300 hover:text-white hover:bg-bg-btn">
        <CiBookmarkRemove />
      </div>
    </article>
  )
}
export default WishListItem
