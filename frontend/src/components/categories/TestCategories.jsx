// to be deleted !

// import React from "react";
// import Category from "./Category";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// const booksArr = [
//   "Action",
//   "Adventure",
//   "Classics",
//   "Comic Book",
//   "Graphic Novel",
//   "Mystery",
//   "Fantasy",
//   "Horror",
//   "Literary Fiction",
//   "Romance",
//   "Science Fiction (Sci-Fi)",
//   "Suspense",
// ];

// const Categories = () => {
//   const [books, setBooks] = useState({
//     action: [],
//     adventure: [],
//     classics: [],
//     comicBook: [],
//     graphicNovel: [],
//     mystery: [],
//     fantasy: [],
//     horror: [],
//     romance: [],
//     scienceFiction: [],
//     suspense: [],
//   });

//   const category = useParams();
//   console.log(category);
//   // const [fetchedBooks, setFetchedBooks] = useState([]);

//   // const categoriesBooks = async () => {
//   //   booksArr.map(async (category) => {
//   //     const response = await axios.get(
//   //       `${import.meta.env.VITE_BACKEND_URL}/api/books?category=${category}`
//   //     );
//   //     console.log(response.data);
//   //     setFetchedBooks(response.data);
//   //   });
//   // };
//   // useEffect(() => {
//   //   categoriesBooks();
//   // });
//   return (
//     <div className="flex gap-5">
//       {booksArr.map((category, idx) => (
//         <Category key={idx} category={category} />
//       ))}
//     </div>
//   );
// };

// export default Categories;
