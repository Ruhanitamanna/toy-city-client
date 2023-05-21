import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../../Layout/Main";
import Login from "../LogIn/Login";
import Register from "../Register/Register";
import Blog from "../Blog/Blog";
import MyToys from "../MyToys/MyToys";
import AddAToy from "../AddAToy/AddAToy";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        path: "alltoys/:id",
        element: <MyToys></MyToys>,
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "addatoy/:id",
        element: <AddAToy></AddAToy>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
