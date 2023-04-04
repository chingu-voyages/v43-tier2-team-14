import BookBody from "./BookBody";
import BookImage from "./BookImage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoContent from "../NoContent";

const Book = () => {
  const single_book_url = `${import.meta.env.VITE_BACKEND_URL}/api/books/`;

  const { id } = useParams();
  console.log(id);
  const [singleBook, setSingleBook] = useState([]);
  console.log(singleBook);

  const fetchSingleBook = async () => {
    try {
      const res = await fetch(`${single_book_url}${id}`);
      const data = await res.json();
      setSingleBook(data.Book.volumeInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleBook();
  }, []);

  return (
    <section className="mx-auto px-12 lg:px-24">
      {singleBook.length > 0 ? (
        <div className="section-wrapper grid grid-col-1 lg:grid-cols-2 justify-center">
          <BookImage singleBook={singleBook} />
          <BookBody singleBook={singleBook} />
        </div>
      ) : (
        <NoContent message="there is no data available at the moment!" />
      )}
    </section>
  );
};

export default Book;
