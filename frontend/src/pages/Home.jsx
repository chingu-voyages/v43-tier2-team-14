import { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState("");

  const fetchData = async () => {
    const res = await fetch(
      "https://v43-tier2-team14-backend.onrender.com/api/user",
      {
        credentials: "include",
      }
    );
    console.log(res);
    const userData = await res.json();
    console.log(userData);
    setUser(userData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(user);
  return (
    <div className="App text-center mx-auto w-3/4">
      <h1 className="text-3xl bg-blue-300 font-bold underline">
        Welcome To The Main Project of Team-14
      </h1>
      <a href="https://v43-tier2-team14-backend.onrender.com/auth/google">
        Login
      </a>
    </div>
  );
};
export default Home;
