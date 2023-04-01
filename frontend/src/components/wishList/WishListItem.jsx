import { BsBookmarkDashFill } from "react-icons/bs";
import { bookStore } from "../../features/bookStore";
import toast, { Toaster } from "react-hot-toast";

const WishListItem = ({
  title,
  id,
  pageCount,
  authors,
  categories,
  description,
  imageLinks,
}) => {
  const removeFromWishlist = bookStore((state) => state.removeFromWishlist);

  const removeItemFromWishlist = (id) => {
    removeFromWishlist(id);
    toast.error(`${title} has been removed from your wish list`, {
      position: "top-right",
    });
  };

  return (
    <article className="w-full md:w-3/6 mx-auto shadow-md bg-zinc-100 flex justify-around items-center my-6 p-4 space-x-4 border-2 rounded-md hover:shadow-sm">
      <img src={imageLinks.thumbnail} alt="" />
      <div className="flex flex-col p-4 flex-1 space-y-4">
        <h2 className="text-xl tracking-wider font-bold">{title}</h2>
        <span className="text-red-600 font-semibold">{authors}</span>
        <p className="px-2 py-0.5 text-xs bg-red-500 text-white rounded-md w-fit">
          {categories}
        </p>
        <p>{pageCount} pages</p>
      </div>
      <div
        className="cursor-pointer text-2xl p-4 duration-300 self-end hover:text-slate-600"
        onClick={() => removeItemFromWishlist(id)}
      >
        <BsBookmarkDashFill />
      </div>
      <Toaster />
    </article>
  );
};
export default WishListItem;
