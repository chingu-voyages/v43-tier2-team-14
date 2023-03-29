import { Link } from "react-router-dom";
import GenericBtns from "../components/UI/GenericBtns";
import { ImBook } from "react-icons/im";
import Search from "../components/Search";
import { userStore } from "../features/userStore";

const Home = () => {
  const user = userStore((state) => state.user);

  return (
    <section className=" flex flex-col items-start justify-start col-start-3 col-span-full row-start-5 row-span-full">
      <Search />
      <h1>hello, Welcome {user?.name}</h1>
      <h1 className="text-3xl  bg-blue-300 font-bold underline mb-4">
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {

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
    </section>
  );
};
export default Home;
