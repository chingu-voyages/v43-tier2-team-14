import { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState("");

  const fetchData = async () => {
    const res = await fetch("http://localhost:4000/auth/login/success");
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
      <a href="http://localhost:4000/api/auth/google">Login</a>
    </div>
  );
};
export default Home;
