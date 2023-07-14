import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
axios.defaults.validateStatus = (code) => code < 500;

const mainUrl =
  'https://anunciaki-web-default-rtdb.firebaseio.com/anuncios.json?orderBy="category"&equalTo="PARAMS"';

const Category = () => {
  const params = useParams();
  const [data, setData] = useState({ isLoading: true, data: {} });
  const url = mainUrl.replace("PARAMS", params.id);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData({ isLoading: false, data: res.data }))
      .catch(() => setData({ isLoading: false, data: {} }));
  }, [url]);

  return (
    <div className="grid grid-cols-3 gap-2">
      {data.isLoading && <p>Carregando...</p>}
      {!data.isLoading && Object.keys(data.data).length === 0 && (
        <p>Nenhuma publicação para esta categoria.</p>
      )}
      {Object.keys(data.data).length > 0 &&
        Object.keys(data.data).map((item) => {
          return (
            <Link
              to={`/categories/${params.id}?anuncio=${item}`}
              key={item}
              className="bg-gray-100 rounded-xl"
            >
              <div className="relative">
                <img
                  className=" rounded-t-xl"
                  src={data.data[item].src}
                  alt={data.data[item].item}
                />
                <div className=" z-10 absolute top-0 left-0 bg-gradient-to-b from-white/10 to-gray-100/60 w-full h-full"></div>
                <p className=" z-20 absolute bottom-2 right-4 text-xl font-bold">
                  RS{data.data[item].price}
                </p>
              </div>
              <div className="py-3 px-4">
                <p className="font-semibold mb-2 mt-2">
                  {data.data[item].item}
                </p>
                <p className="text-xs">{data.data[item].description}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Category;
