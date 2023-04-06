import { useState } from "react";
import { bookStore } from "../features/bookStore";
import toast from "react-hot-toast";

const useWishlist = (id, title) => {
  const addToWishlist = bookStore((state) => state.addToWishlist);
  const wishList = bookStore((state) => state.wishList);
  const removeFromWishlist = bookStore((state) => state.removeFromWishlist);

  const isOnWishlist = (id) => wishList.find((item) => item.id === id);
  const [isAdded, setIsAdded] = useState(isOnWishlist(id));

  const alertAdd = (title) =>
    toast.success(`${title} Added to your wishlist`, {
      position: "top-right",
    });

  const alertRemove = (title) =>
    toast.error(`${title} is removed from wishlist`, {
      position: "top-right",
    });

  const addItemToWishlist = (item) => {
    if (!isOnWishlist(id)) {
      addToWishlist(item);
      alertAdd(title);
      setIsAdded(!isAdded);
    } else {
      removeFromWishlist(id);
      alertRemove(title);
      setIsAdded(!isAdded);
    }
  };

  return { addItemToWishlist, isAdded };
};

export default useWishlist;
