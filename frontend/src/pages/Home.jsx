import { Link } from "react-router-dom";
import GenericBtns from "../components/UI/GenericBtns";
import { ImBook } from "react-icons/im";
// import Category from "../components/categories/Category";
import CategoriesNav from "../components/categories/CategoriesNav";
import { userStore } from "../features/userStore";

const Home = () => {
  const user = userStore((state) => state.user);
  return (
    <>
      <section className="flex flex-col items-start justify-start col-start-3 col-span-full">
        <CategoriesNav />
        <h1 className="text-3xl bg-blue-300 font-bold underline mb-4">
          Welcome To The Main Project of Team-14
        </h1>
      </section>
    </>
  );
};
export default Home;
