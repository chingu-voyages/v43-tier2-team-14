import CategoriesNav from "../components/categories/CategoriesNav";
import BooksContainer from "../components/book/BooksContainer";

const Books = () => {
  return (
    <div className="col-start-3 col-span-full">
      <CategoriesNav />
      <BooksContainer />
    </div>
  );
};
export default Books;
