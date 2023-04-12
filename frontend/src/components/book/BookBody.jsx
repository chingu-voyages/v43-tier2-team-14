import { BsCartPlusFill } from "react-icons/bs";
import { Toaster } from "react-hot-toast";
import GenericBtns from "../UI/GenericBtns";
import useWishlist from "../../hooks/useWishlist";
import { BsBookmarkPlus, BsBookmarkDashFill } from "react-icons/bs";

const BookBody = ({
  id,
  singleBook: {
    title,
    categories,
    pageCount,
    imageLinks,
    description,
    authors,
  },
}) => {
  const { addItemToWishlist, isAdded } = useWishlist(id, title);

  const item = {
    id,
    title,
    categories,
    pageCount,
    imageLinks,
    description,
    authors,
  };

  return (
    <article className="flex flex-col space-y-4">
      <h2 className="text-4xl font-bold tracking-widest leading-tight	 text-center lg:text-left">
        {title}
      </h2>
      <div className="capitalize text-red-500 font-semibold">{authors[0]}</div>

      {categories && (
        <p className="px-2 py-0.5 text-xs bg-green-500 text-white rounded-md w-fit">
          {categories[0]}
        </p>
      )}
      {description && (
        <p className="leading-7">{description.substring(0, 250)}</p>
      )}
      <span className="bg-orange-500 font-bold text-xs capitalize text-white w-fit py-1 px-3 rounded-md">
        pages count: {pageCount}
      </span>

      <div className="flex justify-between pt-16">
        {/*         <GenericBtns title="add to cart" icon={<BsCartPlusFill />} />
         */}{" "}
        <div className="flex space-x-4 items-center">
          {/*           experimental
           */}{" "}
          <div
            className="p-3 text-xl flex justify-center w-12 mx-auto cursor-pointer duration-300 text-text-btn hover:text-text-main"
            onClick={() => addItemToWishlist(item)}
          >
            {!isAdded ? <BsBookmarkPlus /> : <BsBookmarkDashFill />}
          </div>
        </div>
      </div>
      <Toaster />
    </article>
  );
};
export default BookBody;
