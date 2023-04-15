import React from "react";
import { Link } from "react-router-dom";
const SearchResults = ({ results }) => {
  // const books = [{ id: "title1" }, { id: "title2" }];
  const { items } = results;
  console.log(results);

  return (
    <div className="absolute rounded-2xl bg-gray-100 w-[400px] px-8 py-3">
      {items &&
        items.map((item) => {
          return (
            <div
              className="mt-3 cursor-pointer hover:bg-red-300 py-2 px-5 rounded-md"
              key={item.id}
            >
              <div className="flex items-center">
                <Link to={`/book/${item.id}`}>
                  <img
                    className=""
                    src={item.volumeInfo.imageLinks.thumbnail}
                    alt=""
                  />
                </Link>
                <div className="flex flex-col ml-10 w-full">
                  <Link to={`/book/${item.id}`}>
                    <h4>{item.volumeInfo.title}</h4>
                    <p className="font-light mt-3 text-sm">
                      by {item.volumeInfo.authors && item.volumeInfo.authors[0]}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SearchResults;
