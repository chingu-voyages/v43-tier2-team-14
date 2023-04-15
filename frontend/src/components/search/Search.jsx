import SearchResults from "./SearchResults";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const Search = () => {
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const debouncedValue = useDebounce(value, 1000);

  const fetchSearchResults = async () => {
    setSearchResults([]); // reset search results to an empty array
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/books/search-books/${value}`
    );
    const data = await res.json();
    if (data && data.books) {
      setSearchResults(data.books);
    }
  };

  const handleSearchInput = async (event) => {
    const value = event.target.value;
    setValue(value);
  };

  useEffect(() => {
    fetchSearchResults("");
  }, []);

  useEffect(() => {
    console.log("Value: ", debouncedValue);
    fetchSearchResults(value);
    console.log(searchResults);
  }, [debouncedValue]);

  return (
    <div className="flex justify-start items-center gap-3 w-1/2 relative">
      <IoSearchOutline className="text-2xl" />
      <input
        type="text"
        placeholder="Search book name, author, edition ...."
        className="w-[50%] py-3 outline-none border-none bg-transparent"
        value={value}
        onChange={(event) => handleSearchInput(event)}
      />
      <div className="absolute mt-12 transition-all duration-500">
        {searchResults && <SearchResults results={searchResults} />}
      </div>
    </div>
  );
};

export default Search;
