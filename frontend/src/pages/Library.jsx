import { Link } from "react-router-dom";
import BooksContainer from "../components/book/BooksContainer";

const Library = () => {
  return (
    <div className="col-start-3 col-span-full">
      <BooksContainer />
    </div>
  );
};
export default Library;

// the page is intended for testing purposes
