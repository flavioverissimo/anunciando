import { Link } from "react-router-dom";

const Category = ({ category, url }) => {
  return (
    <Link
      className="bg-gray-200/75 rounded-xl px-6 py-3 text-xl font-medium text-center text-gray-700 flex flex-col justify-center"
      to={`/categories/${url}`}
    >
      {category}
    </Link>
  );
};

export default Category;
