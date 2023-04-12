import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { bookStore } from "../features/bookStore";
import Sidebar from "../components/Sidebar";
import { userStore } from "../features/userStore";
import Search from "../components/Search";

const Root = () => {
  // const getBooks = bookStore((state) => state.getBooks);
  //  const bookList = bookStore((state) => state.bookList);
  const user = userStore((state) => state.user);
  const fetchUserData = userStore((state) => state.fetchUserData);

  useEffect(() => {
    // getBooks();
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      fetchUserData();
    }
    console.log(user);
  }, []);

  return (
    <main className="bg-gray-50 grid grid-cols-12 min-h-screen">
      <Search />
      <Sidebar />
      <Outlet />
      <Footer />
    </main>
  );
};
export default Root;
