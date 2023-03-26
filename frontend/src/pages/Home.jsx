import { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState("");

  const fetchData = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user`, {
      credentials: "include",
    });
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
      <div className="flex flex-col">
        {user && (
          <div>
            Welcome <h1>{user.name}</h1>
            <img className="w-20 mx-auto space-y-3" src={user.picture} alt="" />
          </div>
        )}
      </div>
      <div className="flex w-full gap-3">
        <a href={`${import.meta.env.VITE_BACKEND_URL}/auth/login`}>Login</a>
        <a href={`${import.meta.env.VITE_BACKEND_URL}/auth/logout`}>Login</a>
      </div>
    </div>
  );
};
export default Home;
