import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Search";
import Footer from "../components/Footer";
import { bookStore } from "../features/bookStore";
import Sidebar from "../components/Sidebar";

const Root = () => {
  const getBooks = bookStore((state) => state.getBooks);
  const bookList = bookStore((state) => state.bookList);

  useEffect(() => {
    getBooks();
    console.log(bookList);
  }, []);

  return (
    <main className="h-screen p-2 bg-gray-200 grid grid-cols-12 grid-row-12">
      <Sidebar />
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
};
export default Root;
