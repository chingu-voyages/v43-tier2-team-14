import BookBody from "./BookBody";
import BookImage from "./BookImage";
import { useParams } from "react-router-dom";
import NoContent from "../NoContent";
import useFetch from "../../hooks/useFetch";
import Loading from "../UI/Loading";

const Book = () => {
  // const single_book_url = `${import.meta.env.VITE_BACKEND_URL}/api/books/`;
  const single_book_url = `https://www.googleapis.com/books/v1/volumes/`;

  const { id } = useParams();
  const { data: singleBook, isLoading } = useFetch(`${single_book_url}${id}`);
  // const singleBook = data.Book.volumeInfo;
  console.log(`${single_book_url}${id}`);
  console.log(singleBook);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="mx-auto mb-14 px-12 lg:px-24">
      {!singleBook ? (
        <NoContent message="there is no data available at the moment!" />
      ) : (
        <div className="section-wrapper grid grid-col-1 lg:grid-cols-2 justify-center items-start">
          <BookImage singleBook={singleBook} />
          <BookBody singleBook={singleBook} id={id} />
        </div>
      )}
    </section>
  );
};

export default Book;
