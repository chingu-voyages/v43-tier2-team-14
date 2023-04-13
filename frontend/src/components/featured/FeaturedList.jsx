import { Link } from "react-router-dom";

const FeaturedList = ({ list }) => {
  const { books } = list;

  return (
    <div className="w-full grid grid-cols-200 gap-6">
      {books?.map((book) => {
        return (
          <article key={book.title} className="flex flex-col">
            <Link to={book.title}>
              <h4 className="px-6 py-3 flex-initial bg-slate-400 rounded-lg font-semi-bold text-sm text-center">
                {book.title.substring(0, 15)}
              </h4>
            </Link>

            <Link to={book.title}>
              <img
                className="pt-6 flex-1"
                src={book.book_image}
                alt={`${book.title} Cover Image`}
              />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default FeaturedList;
