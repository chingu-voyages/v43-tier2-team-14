import React from "react";
import { Link } from "react-router-dom";

export const booksArr = [
  "action",
  "adventure",
  "classics",
  "comic",
  "graphic",
  "mystery",
  "fantasy",
  "horror",
  "romance",
  "sci-fi",
  "suspense",
];

const CategoriesNav = () => {
  return (
    <div className="flex gap-5">
      {booksArr.map((category, idx) => (
        <Link key={idx} to={`/categories/${category}`}>
          {category}
        </Link>
      ))}
    </div>
  );
};

export default CategoriesNav;
