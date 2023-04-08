import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookCard from "./BookCard";

const BooksContainer = () => {
  const { category } = useParams();
  console.log(category);
  const [books, setBooks] = useState([]);
  const fetchCategory = async () => {
    const data = await axios.get(
      // `${import.meta.env.VITE_BACKEND_URL}/api/books?category=${category}`
      `https://www.googleapis.com/books/v1/volumes?q=${category}`
    );
    console.log(data.data.items);
    setBooks(data.data.items);
  };

  useEffect(() => {
    fetchCategory();
  }, [category]);
  return (
    <section className="flex flex-col justify-center">
      <div className="p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {books.map((book) => {
          return <BookCard key={book.id} {...book} />;
        })}
      </div>
    </section>
  );
};

export default BooksContainer;
