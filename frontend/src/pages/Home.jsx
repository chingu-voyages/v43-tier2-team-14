import GenericBtns from "../components/UI/GenericBtns";
import Featured from "../components/featured/Featured";
import CategoriesNav from "../components/categories/CategoriesNav";
import { userStore } from "../features/userStore";

const Home = () => {
  const user = userStore((state) => state.user);
  return (
    <>
      <section className="flex flex-col items-start justify-start col-start-3 col-span-full">
        <CategoriesNav />
        <h1 className="text-3xl bg-blue-300 font-bold underline my-4">
          Welcome To The Main Project of Team-14
        </h1>
        <Featured />
      </section>
    </>
  );
};
export default Home;
