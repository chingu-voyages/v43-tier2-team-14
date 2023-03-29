import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { bookStore } from "../features/bookStore";
import Sidebar from "../components/Sidebar";
import { userStore } from "../features/userStore";
import axios from "axios";

const fetchUserData = async () => {
  try {
    const userData = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/user`,
      {
        withCredentials: true,
        credentials: "include",
      }
    );
    console.log(userData);
    userStore.getState.set({ user: userData });
  } catch (error) {
    console.log(error);
  }
};

const Root = () => {
  const getBooks = bookStore((state) => state.getBooks);
  const bookList = bookStore((state) => state.bookList);
  const user = userStore((state) => state.user);
  const updateUser = userStore((state) => state.updateUser);

  useEffect(() => {
    getBooks();
    console.log(bookList);
    fetchUserData();
    console.log(user);
    updateUser(user);
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
