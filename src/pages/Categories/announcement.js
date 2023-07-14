import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const mainUrl =
  "https://anunciaki-web-default-rtdb.firebaseio.com/anuncios/PARAM.json";

const Announcement = () => {
  const [data, setData] = useState({});
  const query = useLocation();
  const url = mainUrl.replace("PARAM", query.search.split("=")[1]);

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  });

  return (
    <div className="mb-12">
      <div className="flex gap-12 mb-16">
        <div className="flex-1 bg-gray-100 p-6">
          <span className=" py-1 px-4 bg-white rounded-xl">
            {data.category}
          </span>
          <p className="font-semibold text-2xl mt-8">{data.item}</p>
          <p className=" text-lg mt-3">{data.description}</p>
          <p className="text-4xl font-semibold pt-6">{data.price}</p>
        </div>

        <div className="flex-1 flex flex-col gap-6 mt-2">
          <div>
            <p className="text-2xl font-semibold">Anunciante:</p>
            <p className="text-3xl">{data.seller}</p>
          </div>
          <div>
            <p className="text-2xl font-semibold  ">Contato:</p>
            <p className="text-3xl">{data.contact}</p>
          </div>
        </div>
      </div>
      <div>
        <img src={data.src} alt={data.item} />
      </div>
    </div>
  );
};

export default Announcement;
