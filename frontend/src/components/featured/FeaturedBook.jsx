import { useParams } from "react-router-dom";
import { BsCartPlusFill } from "react-icons/bs";
import { Toaster } from "react-hot-toast";
import GenericBtns from "../UI/GenericBtns";
import { BsBookmarkPlus, BsBookmarkDashFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import useWishlist from "../../hooks/useWishlist";
import BookBody from "../book/BookBody";
import BookImage from "../book/BookImage";
import NoContent from "../NoContent";
import Loading from "../UI/Loading";
const FeaturedSingleBook = () => {
  const { id } = useParams();
  const [singleBook, setSingleBook] = useState(null);
  const fetchSingleBook = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/books/single-book/${id}`
    );
    const data = await res.json();
    console.log(data.singleBook.items[0]);
    setSingleBook(data.singleBook.items[0]);
  };

  useEffect(() => {
    fetchSingleBook();
  }, [id]);
  console.log(singleBook);
  const { title, authors, categories, description, pageCount, imageLinks } =
    singleBook || {};
  return (
    <section className="mx-auto mb-14 px-12 lg:px-24">
      {!singleBook ? (
        <Loading />
      ) : (
        <div className="section-wrapper grid grid-col-1 lg:grid-cols-2 justify-center items-start">
          <BookImage singleBook={singleBook.volumeInfo} />
          <BookBody singleBook={singleBook.volumeInfo} id={singleBook.id} />
        </div>
      )}
    </section>
  );
};

export default FeaturedSingleBook;
