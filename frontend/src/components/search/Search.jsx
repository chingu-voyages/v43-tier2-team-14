import SearchResults from "./SearchResults";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const Search = () => {
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const debouncedValue = useDebounce(value, 1000);

  const [isClicked, setIsClicked] = useState(false);

  const clearInput = () => {
    setValue("");
  };

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
    <div className="relative flex items-center justify-start w-1/2 gap-3">
      <IoSearchOutline className="text-2xl" />
      <input
        type="text"
        placeholder="Search book name, author, edition ...."
        className="w-1/2 py-3 bg-transparent border-none outline-none"
        value={value}
        onChange={(event) => handleSearchInput(event)}
        onBlur={() => clearInput()}
      />
      <div className="absolute mt-12 transition-all duration-500">
        {searchResults && (
          <SearchResults
            results={searchResults}
            setIsClicked={setIsClicked}
            clearInput={clearInput}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
