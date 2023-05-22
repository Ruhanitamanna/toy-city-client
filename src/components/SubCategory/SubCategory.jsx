import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const SubCategory = () => {
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);

  //   console.log(user);

  useEffect(() => {
    fetch("https://toy-city-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="m-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Sub Category</h2>
        <br />
        <p>Choose your type of toys from different categories</p>
      </div>
      <Tabs>
        <TabList>
          <Tab>Panda</Tab>
          <Tab>Rabbit </Tab>
          <Tab>Teddy bear </Tab>
        </TabList>

        <TabPanel>
          <div className="flex-none md:flex m-auto justify-around">
            {toys
              .filter((toy) => toy.name.toLowerCase().includes("panda"))
              .slice(0, 3)
              .map((toy) => (
                <div key={toy.name} className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img src={toy.img} alt={toy.name} className="rounded-xl" />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{toy.name}</h2>
                    <p>price: ${toy.price}</p>
                    <div className="card-actions">
                      <Link to={`addatoy/${toy._id}`}>
                        <button
                          className="btn btn-secondary"
                          onClick={() => {
                            if (user) {
                              toast.success("Logged in! Viewing details...");
                            } else {
                              toast.error("Please login to view details.");
                              history.push("/login"); // Redirect to the login page
                            }
                          }}
                        >
                          View Details
                        </button>
                        <ToastContainer />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex-none md:flex m-auto justify-around">
            {toys
              .filter((toy) => toy.name.toLowerCase().includes("rabbit"))
              .slice(0, 3)
              .map((toy) => (
                <div key={toy.name} className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img src={toy.img} alt={toy.name} className="rounded-xl" />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{toy.name}</h2>
                    <p>price: ${toy.price}</p>
                    <div className="card-actions">
                      <Link to={`addatoy/${toy._id}`}>
                        <button className="btn btn-secondary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex-none md:flex m-auto justify-around">
            {toys
              .filter((toy) => toy.name.toLowerCase().includes("teddy bear"))
              .slice(0, 3)
              .map((toy) => (
                <div key={toy.name} className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img src={toy.img} alt={toy.name} className="rounded-xl" />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{toy.name}</h2>
                    <p>price: ${toy.price}</p>
                    <p>Ratings: {toy.rating}</p>
                    <div className="card-actions">
                      <Link to={`addatoy/${toy._id}`}>
                        <button className="btn btn-secondary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SubCategory;

// export default () => (

// );
