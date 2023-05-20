import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../../Layout/Main";
import Login from "../LogIn/Login";
import Register from "../Register/Register";
import Blog from "../Blog/Blog";
import MyToys from "../MyToys/MyToys";
import AddAToy from "../AddAToy/AddAToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      ,
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "mytoys/:id",
        element: <MyToys></MyToys>,
      },
      {
        path: "addatoy/:id",
        element: <AddAToy></AddAToy>,
      },
    ],
  },
]);

export default router;
