import { useEffect, useState } from "react";

const fetchData = async () => {
  const [url, setUrl] = useState("");
  setUrl(
    "https://v43-tier2-team14-backend.onrender.com/api/books?category=%7B%7D"
  );
  const res = await fetch(url);
  const data = await res.json();
  console.log({ res });
  console.log({ data });
};

const FetchingBooks = () => {
  useEffect(() => {
    fetchData();
  }, []);
  return <div>FetchingBooks</div>;
};

export default FetchingBooks;
