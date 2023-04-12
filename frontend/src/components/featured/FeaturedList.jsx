import React from "react";

const FeaturedList = ({ list }) => {
  const books = list.books.slice(0, 5);

  console.log(books);
  return (
    <div className="w-full grid grid-cols-200 gap-6">
      {books?.map((book) => {
        return (
          <article key={book.title} className="flex flex-col">
            <h4 className="px-6 py-3 flex-initial bg-slate-400 rounded-lg font-semi-bold text-sm text-center">
              {book.title.substring(0, 15)}
            </h4>
            <img
              className="pt-6 flex-1"
              src={book.book_image}
              alt={`${book.title} Cover Image`}
            />
          </article>
        );
      })}
    </div>
  );
};

export default FeaturedList;
