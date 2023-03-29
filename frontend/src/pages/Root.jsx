import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { bookStore } from "../features/bookStore";
import Sidebar from "../components/Sidebar";
import { userStore } from "../features/userStore";
import axios from "axios";

const Root = () => {
  const [userData, setUserData] = useState({});
  const getBooks = bookStore((state) => state.getBooks);
  const bookList = bookStore((state) => state.bookList);
  const user = userStore((state) => state.user);
  const updateUser = userStore((state) => state.updateUser);

  const fetchUserData = async () => {
    try {
      const userInfo = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/user`,
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      console.log(userInfo);
      setUserData(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
    console.log(bookList);
    fetchUserData();
    console.log(userData);
    updateUser(userData);
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
