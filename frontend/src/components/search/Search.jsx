import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInput = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  return (
    <div className="flex justify-start items-center gap-3 w-[50%]">
      <IoSearchOutline className="text-2xl" />
      <input
        type="text"
        placeholder="Search book name, author, edition ...."
        className="w-1/2 py-3 bg-transparent border-none outline-none"
        onChange={(event) => handleSearchInput(event)}
      />
    </div>
  );
};

export default Search;
