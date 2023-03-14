import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import Root from "./pages/Root"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import LogIn from "./pages/LogIn"
import Error from "./pages/Error"

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
          path: "login",
          element: <LogIn />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
