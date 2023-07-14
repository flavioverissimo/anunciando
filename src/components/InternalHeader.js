import { Link } from "react-router-dom";
const InternalHeader = () => {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto">
        <Link to="/" className="inline-block py-2 px-6 ">
          <img src="/anunciando.svg" alt="Anunciando" className="w-40" />
          <p className=" text-sm text-gray-400 -mt-1 text-center">
            Leve seu produto adiante
          </p>
        </Link>
      </div>
    </header>
  );
};

export default InternalHeader;
