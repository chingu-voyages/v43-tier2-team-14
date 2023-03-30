import { Link } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
import { bookStore } from "../../features/bookStore";
import toast, { Toaster } from "react-hot-toast";

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

  const item = {
    id,
    title,
    categories,
    pageCount,
    imageLinks,
    description,
    authors,
  };
  console.log(item);

  const notify = () =>
    toast.success(`${title} Added to your wish list`, {
      position: "top-right",
    });

  const addItemToWishlist = (item) => {
    addToWishlist(item);
    notify();
  };

  return (
    <article className="border border-zinc-400 rounded-sm px-2 py-6 flex flex-col items-center justify-between">
      <figure className="flex cursor-pointer">
        <Link to={`${id}`}>
          <img src={imageLinks.thumbnail} alt="" />
        </Link>
      </figure>
      <div className="px-4 text-center">
        <h2 className="mb-4">{title}</h2>
        <p>{categories}</p>
        <span>{pageCount} pages</span>
        <div
          className="p-3 flex justify-center w-12 mx-auto cursor-pointer duration-300 text-text-btn hover:text-text-main"
          onClick={() => addItemToWishlist(item)}
        >
          <BsBookmark />
        </div>
      </div>
      <Toaster />
    </article>
  );
};
export default BookCard;
