import BookBody from "./BookBody";
import BookImage from "./BookImage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoContent from "../NoContent";

const Book = () => {
  const single_book_url = `${import.meta.env.VITE_BACKEND_URL}/api/books/`;

  const { id } = useParams();
  const [singleBook, setSingleBook] = useState([]);

  const fetchSingleBook = async () => {
    try {
      const res = await fetch(`${single_book_url}${id}`);
      const data = await res.json();
      setSingleBook(data.Book.items[0].volumeInfo);
      console.log(data.Book.items[0].volumeInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleBook();
  }, []);

  return (
    <section className="mx-auto px-12 lg:px-24">
      <div className="section-wrapper grid gird-col-1 lg:grid-cols-2 justify-center">
        {!singleBook ? (
          <NoContent />
        ) : (
          <>
            <BookImage singleBook={singleBook} />
            <BookBody singleBook={singleBook} />
          </>
        )}
      </div>
    </section>
  );
};

export default Book;
