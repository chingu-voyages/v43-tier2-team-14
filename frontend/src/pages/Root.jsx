import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { bookStore } from "../features/bookStore";
import Sidebar from "../components/Sidebar";
import { userStore } from "../features/userStore";
import axios from "axios";

const Root = () => {
  const [userData, setUserData] = useState({});
  // const getBooks = bookStore((state) => state.getBooks);
  // const bookList = bookStore((state) => state.bookList);
  const user = userStore((state) => state.user);
  const fetchUserData = userStore((state) => state.fetchUserData);
  console.log(user);

  useEffect(() => {
    // getBooks();
    // console.log(bookList);
    fetchUserData();
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
