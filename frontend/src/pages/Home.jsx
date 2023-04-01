import { Link } from "react-router-dom";
import GenericBtns from "../components/UI/GenericBtns";
import { ImBook } from "react-icons/im";
import Search from "../components/Search";
import { userStore } from "../features/userStore";

const Home = () => {
  const user = userStore((state) => state.user);
  console.log(user);
  return (
    <section className=" flex flex-col items-start justify-start col-start-3 col-span-full row-start-5 row-span-full">
      <Search />
      <h1>hello, Welcome {user.name}</h1>
      <img src={user.picture} alt="" />
      <h1 className="text-3xl  bg-blue-300 font-bold underline mb-4">
        Welcome To The Main Project of Team-14
      </h1>
      <Link to="books">
        <GenericBtns title="to library" icon={<ImBook />} />
      </Link>
    </section>
  );
};
export default Home;
