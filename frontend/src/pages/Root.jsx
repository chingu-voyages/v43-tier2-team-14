import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { bookStore } from "../features/bookStore";
import Sidebar from "../components/Sidebar";
import { userStore } from "../features/userStore";

const Root = () => {
  // const getBooks = bookStore((state) => state.getBooks);
  // const bookList = bookStore((state) => state.bookList);
  const user = userStore((state) => state.user);
  const isLoggedIn = userStore((state) => state.isLoggedIn);
  const fetchUserData = userStore((state) => state.fetchUserData);

  useEffect(() => {
    // getBooks();
    // console.log(bookList);
    console.log(user);
    console.log(isLoggedIn);
    if (isLoggedIn) {
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
