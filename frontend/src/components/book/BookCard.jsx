import { Link } from "react-router-dom";
import { BsBookmarkPlus, BsBookmarkDashFill } from "react-icons/bs";
import { bookStore } from "../../features/bookStore";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const BookCard = ({
  id,
  volumeInfo: {
    title,
    categories,
    description,
    authors,
    pageCount,
    imageLinks,
  },
}) => {
  const addToWishlist = bookStore((state) => state.addToWishlist);
  const wishList = bookStore((state) => state.wishList);
  const removeFromWishlist = bookStore((state) => state.removeFromWishlist);

  const item = {
    id,
    title,
    categories,
    pageCount,
    imageLinks,
    description,
    authors,
  };
  const isOnWishlist = (id) => wishList.find((item) => item.id === id);
  const [isAdded, setIsAdded] = useState(isOnWishlist(id));

  const alertAdd = () =>
    toast.success(`${title} Added to your wishlist`, {
      position: "top-right",
    });

  const alertRemove = () =>
    toast.error(`${title} is removed from wishlist`, {
      position: "top-right",
    });

  const addItemToWishlist = (item) => {
    if (!isOnWishlist(id)) {
      addToWishlist(item);
      alertAdd();
      setIsAdded(!isAdded);
      console.log("salamu alykooo");
    } else {
      removeFromWishlist(id);
      alertRemove();
      setIsAdded(!isAdded);
    }
  };

  return (
    <article className="relative card z-10 max-w-xs border bg-zinc-100 border-slate-300 shadow-md rounded-md px-2 py-6 flex flex-col items-center justify-between">
      <figure className="flex cursor-pointer mb-2">
        <Link to={`${id}`}>
          <img src={imageLinks.thumbnail} className="flex max-w-full" alt="" />
        </Link>
      </figure>

      <div className="px-4 text-center flex flex-col items-center space-y-2">
        <h2 className="font-semibold">{title.substr(0, 25)}</h2>
        <p className="px-2 py-0.5 text-xs bg-red-500 text-white rounded-md w-fit">
          {categories}
        </p>
        <span>{pageCount} pages</span>
        <div
          className="p-3 text-xl flex justify-center w-12 mx-auto cursor-pointer duration-300 text-text-btn hover:text-text-main"
          onClick={() => addItemToWishlist(item)}
        >
          {!isAdded ? <BsBookmarkPlus /> : <BsBookmarkDashFill />}
        </div>
      </div>
      <Toaster />
    </article>
  );
};
export default BookCard;
