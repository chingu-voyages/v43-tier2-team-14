import { bookStore } from "../../features/bookStore";
import BookCard from "./BookCard";
import NoContent from "../NoContent";

const BooksContainer = () => {
  const bookList = bookStore((state) => state.bookList);
  return (
    <>
      <section className="flex flex-col justify-center">
        <article className="flex flex-col space-y-4">
          <h1 className="text-4xl font-bold capitalize">
            happy reading Muhammad!
          </h1>
          <p className="w-full md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            dolor ex dicta illo pariatur amet repellendus modi cum nam aliquam
            quam
          </p>
        </article>

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
