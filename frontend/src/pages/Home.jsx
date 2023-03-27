import { Link } from "react-router-dom";
import GenericBtns from "../components/UI/GenericBtns";
import { ImBook } from "react-icons/im";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [user, setUser] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user`, {
        credentials: "include",
      });
      const userData = await res.json();
      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(user);
  return (
    <section className=" flex flex-col items-start justify-start h-full col-start-3 col-span-full mt-24 pt-10">
      <h1 className="text-3xl bg-blue-300 font-bold underline mb-4">
        Welcome To The Main Project of Team-14
      </h1>
      <Link to="books">
        <GenericBtns title="to library" icon={<ImBook />} />
      </Link>
      <div className="flex flex-col">
        {user && (
          <div>
            Welcome <h1>{user.name}</h1>
            <img className="w-20 mx-auto space-y-3" src={user.picture} alt="" />
          </div>
        )}
      </div>
      <div className="flex w-full justify-start mt-5 gap-3">
        <a href={`${import.meta.env.VITE_BACKEND_URL}/auth/google`}>Login</a>
        <a href={`${import.meta.env.VITE_BACKEND_URL}/auth/logout`}>Logout</a>
      </div>
    </section>
  );
};
export default Home;
