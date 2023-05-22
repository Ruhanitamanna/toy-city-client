import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/alltoys">All toys</Link>
      </li>

      <li>
        <Link to="addatoy/:id">Add a toy</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to="/singleToy/:id">Toy details</Link>
          </li>
          <li>
            <Link to="/mytoys">My Toys</Link>
          </li>
          <button onClick={handleLogout}>Log out</button>
        </>
      ) : (
        <Link to="/login">Log in</Link>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <img className="w-10 rounded-full" src={logo} alt="" />
        </Link>
        <h1 className="font-bold text-3xl text-secondary">TOY CITY</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/blog">
          <button className="btn btn-secondary">Blog</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
