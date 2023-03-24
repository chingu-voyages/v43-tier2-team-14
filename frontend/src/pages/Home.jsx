import FetchingBooks from "../components/FetchingBooks";

const Home = () => {
  return (
    <div className="App text-center mx-auto w-3/4">
      <h1 className="text-3xl bg-blue-300 font-bold underline">
        Welcome To The Main Project of Team-14
      </h1>
      <a href="https://v43-tier2-team14-backend.onrender.com/auth/google">
        Login
      </a>
      <FetchingBooks />
    </div>
  );
};
export default Home;
