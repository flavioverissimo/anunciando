import { Link } from "react-router-dom";
import { useGetLimitData } from "../../../database";

export default function ProductCard() {
  const data = useGetLimitData("anuncios", 6);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900">
          Ultimos Anuncios
        </h2>
        {data === null && (
          <p className="text-center py-12 text-xl font-medium">
            Nenhuma publicação foi inserida.
          </p>
        )}
        {data !== null && Object.keys(data).length === 0 && (
          <p className="text-center">Carregando...</p>
        )}
        {data !== null && Object.keys(data).length !== 0 && (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {Object.keys(data).map((item) => (
              <Link
                to={`/categories/${data[item].category}?anuncio=${item}`}
                key={item}
                className="group relative"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={data[item].src}
                    alt={data[item].item}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 font-bold">
                      {data[item].item}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {data[item].description}
                    </p>
                  </div>
                  <p className="text-lg text-gray-900 font-bold">
                    {data[item].price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
