import { Link } from "react-router-dom";
import BooksContainer from "../components/book/BooksContainer";

const Library = () => {
  return (
    <div className="col-start-3 col-span-full mt-24">
      <article className="flex flex-col space-y-4 mb-6">
        <h1 className="text-4xl font-bold capitalize">
          happy reading Muhammad!
        </h1>
        <p className="w-full md:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor
          ex dicta illo pariatur amet repellendus modi cum nam aliquam quam
        </p>
      </article>
      <BooksContainer />
    </div>
  );
};
export default Library;

// the page is intended for testing purposes
// margin top to be added globally for sections in main css
