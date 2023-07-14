import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 ">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <Link to={"/"}>
          <img src="/anunciando.svg" alt="Anunciando" className="w-40" />
          <p className=" text-sm text-center text-gray-500 -mt-1">
            Leve seu produto adiante
          </p>
        </Link>

        <p className="text-sm text-gray-600">
          © Copyright 2023. All Rights Reserved.
        </p>
        <div className="flex flex-col text-gray-600 text-sm">
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Facebook</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
