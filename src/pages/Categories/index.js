import { Link, useLocation } from "react-router-dom";
import InternalHeader from "./../../components/InternalHeader";
import Category from "./category";
import Announcement from "./announcement";

const Categories = ({ categories }) => {
  const query = useLocation();
  return (
    <div className=" min-h-screen">
      <InternalHeader />
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold pt-12 pb-6">Categories</h1>
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <ul>
              {Object.keys(categories).map((item) => (
                <li key={item}>
                  <Link to={`/categories/${categories[item].url}`}>
                    {categories[item].category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-9">
            {query.search === "" && <Category />}
            {query.search !== "" && <Announcement />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
