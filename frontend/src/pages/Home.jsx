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
        <Featured />
      </section>
    </>
  );
};
export default Home;
