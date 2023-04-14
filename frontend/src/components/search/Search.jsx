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
        className="w-[50%] py-3 outline-none border-none bg-transparent"
        onChange={(event) => handleSearchInput(event)}
      />
    </div>
  );
};

export default Search;
