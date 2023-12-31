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
import AllToys from "../AllToys/AllToys";
import NotFoundLayout from "../notFoundLayout/notFoundLayout";
import SingleToyDetails from "../SingleToyDetails/SingleToyDetails";
import UpdateToy from "../MyToys/UpdateToy";
// import NotFoundLayout from "../NotFoundLayout/NotFoundLayout";

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
        path: "/alltoys",
        element: <AllToys></AllToys>,
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
        path: "/addatoy/:id?",
        element: (
          <PrivateRoute>
            <AddAToy></AddAToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-city-server.vercel.app/toys/${
              params.id ? params.id : ""
            }`
          ),
      },
      {
        path: "/singleToy/:id",
        element: (
          <PrivateRoute>
            <SingleToyDetails></SingleToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-city-server.vercel.app/bookedToy/${params.id}`),
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`https://toy-city-server.vercel.app/bookedToy/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: (
      <NotFoundLayout>
        <ErrorPage></ErrorPage>,
      </NotFoundLayout>
    ),
  },
]);

export default router;
