import React from "react";

const FeaturedList = ({ list }) => {
  const books = list.books.filter((book, index) => index < 5);

  console.log(books);
  return (
    <div className="flex gap-6">
      {books.map((book) => {
        return (
          <div
            key={book.primary_isbn10}
            className="flex flex-col w-full  items-start "
          >
            <h4 className="w-52 px-6 py-3 bg-slate-400 rounded-lg font-light text-sm text-center">
              {book.title}
            </h4>
            <img
              className="w-52 pt-6"
              src={book.book_image}
              alt={`${book.title} image`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedList;
