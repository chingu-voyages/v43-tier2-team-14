import { bookStore } from "../../features/bookStore";
import BookCard from "./BookCard";
import NoContent from "../NoContent";

const BooksContainer = () => {
  const bookList = bookStore((state) => state.bookList);
  return (
    <>
      <section className="flex flex-col justify-center">
        <h2 className="capitalize text-4xl text-center my-4">
          the main book list container lives here
        </h2>

        {bookList.length > 0 ? (
          <div className="p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
            {bookList.map((bookCard) => {
              return <BookCard key={bookCard.id} {...bookCard} />;
            })}
          </div>
        ) : (
          <>
            <NoContent message="there are no books available at the moment!" />
          </>
        )}
      </section>
    </>
  );
};
export default BooksContainer;
