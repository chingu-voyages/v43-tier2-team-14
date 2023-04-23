import { useState } from "react";
import { userStore } from "../features/userStore";
import { cartStore } from "../features/cartStore";
import toast from "react-hot-toast";

const useCart = (id, title,image,price,author) => {
  const user = userStore((state) => state.user);
  const cart = cartStore((state) => state.cart);
  const addItemToCartState = cartStore((state) => state.addItemToCart);
  const removeItemFromCartState = cartStore(
    (state) => state.removeItemFromCart
  );
  const addCartDB = cartStore((state) => state.addCartDB);

  const isOnCart = (id) => cart.find((item) => item.id === id);
  const [isAdded, setIsAdded] = useState(isOnCart(id));

  const alertAdd = (title) => {
    toast.success(`${title} Added to Cart`, {
      position: "top-right",
    });
  };

  const alertRemove = (title) => {
    toast.error(`${title} is removed from Cart`, {
      position: "top-right",
    });
  };

  const noUser = () => {
    toast.error(`Sorry you have to sign in`, {
      position: "top-right",
    });
  };

  const addItemToCart = (item) => {
    if (!user) noUser();
    if (!isOnCart(id)) {
      addToWishlist(item);
      user && addBookDb(user._id, item);
      alertAdd(title);
      setIsAdded(!isAdded);
    } else {
      removeFromWishlist(id);
      user && removeBookDb(user._id, id);
      alertRemove(title);
      setIsAdded(!isAdded);
    }
  };

  return { addItemToCart, isAdded };
};

export default useCart;
