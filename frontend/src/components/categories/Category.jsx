import React from "react";
import { NavLink } from "react-router-dom";
const Category = ({ category }) => {
  return (
    <div className="">
      <h2>{category}</h2>
      <NavLink to={`categories/${category}`}></NavLink>
    </div>
  );
};

export default Category;
