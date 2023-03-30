import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { bookStore } from "../features/bookStore";
import Sidebar from "../components/Sidebar";
import { userStore } from "../features/userStore";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Root = () => {
  // const getBooks = bookStore((state) => state.getBooks);
  // const bookList = bookStore((state) => state.bookList);
  const user = userStore((state) => state.user);
  const fetchUserData = userStore((state) => state.fetchUserData);

  useEffect(() => {
    // getBooks();
    // console.log(bookList);
    console.log(user);
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    console.log(isAuthenticated);
    if (isAuthenticated) {
      const fetchUserData = () => {
        const { data, error } = useSWR(
          `${import.meta.env.VITE_BACKEND_URL}/api/user`,
          fetcher
        );
      };
      fetchUserData();
    }
  }, []);

  return (
    <main className="bg-gray-200 grid grid-cols-12">
      <Sidebar />
      <Outlet />
      <Footer />
    </main>
  );
};
export default Root;
