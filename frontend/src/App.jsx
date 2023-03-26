
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import Root from "./pages/Root"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Register from "./pages/Register"
import LogIn from "./pages/LogIn"
import Error from "./pages/Error"
import BookDetails from "./pages/bookDetails"
import Wishlist from "./pages/Wishlist"
import Library from "./pages/Library"
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "books",
          element: <Library />,
        },
        {
          path: "books/:id",
          element: <BookDetails />,
        },
        {
          path: "login",
          element: <LogIn />,
        },
        {
          path: "wishlist",
          element: <Wishlist />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
