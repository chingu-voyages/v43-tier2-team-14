import React, { useState } from "react";
import { Link } from "react-router-dom";
const SearchResults = ({ results, setIsClicked, clearInput }) => {
  // const books = [{ id: "title1" }, { id: "title2" }];
  const { items } = results;
  console.log(results);

  return (
    <div className="z-50 absolute rounded-2xl bg-gray-100 w-[400px] px-8 py-3">
      {items &&
        items.map((item) => {
          return (
            <div
              className="px-5 py-2 mt-3 rounded-md cursor-pointer hover:bg-red-300"
              key={item.id}
              onClick={() => {
                setIsClicked(true);
                clearInput();
              }}
            >
              <div className="flex items-center">
                <Link to={`/book/${item.id}`}>
                  <img
                    className=""
                    src={item.volumeInfo.imageLinks.thumbnail}
                    alt=""
                  />
                </Link>
                <div className="flex flex-col w-full ml-10">
                  <Link to={`/book/${item.id}`}>
                    <h4>{item.volumeInfo.title}</h4>
                    <p className="mt-3 text-sm font-light">
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
