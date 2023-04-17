import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export const useFetchCartItems = () => {
  const { data, error } = useSWR(
    `${import.meta.env.VITE_BACKEND_URL}/api/cart/get-cart-items`,
    fetcher
  );
  console.log(data, error);
  return { data, error };
};
