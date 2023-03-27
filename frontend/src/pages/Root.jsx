import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Search from "../components/Search";
import Footer from "../components/Footer";
import { bookStore } from "../features/bookStore";
import Sidebar from "../components/Sidebar";
import { userStore } from "../features/userStore";

const Root = () => {
  const getBooks = bookStore((state) => state.getBooks);
  const bookList = bookStore((state) => state.bookList);
  const getUserData = userStore((state) => state.getUserData);
  const user = userStore((state) => state.user);

  useEffect(() => {
    getBooks();
    getUserData();
    console.log(bookList);
    console.log(user);
  }, []);

  return (
    <main className="h-screen bg-gray-200 grid grid-cols-12 grid-row-12">
      <Sidebar />
      <Outlet />
      <Footer />
    </main>
  );
};
export default Root;
