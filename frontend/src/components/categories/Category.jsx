import CategoryCard from "../categories/CategoryCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Category = () => {
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
  }, []);
  return (
    <div className="flex flex-wrap items-start justify-start col-start-3 col-span-full">
      {books.map((book) => {
        return (
          <div className="flex flex-grow w-[25rem] h-[25rem]">
            <CategoryCard key={book.id} {...book} />
          </div>
        );
      })}
    </div>
  );
};

export default Category;
