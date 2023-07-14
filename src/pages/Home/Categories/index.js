import Category from "./category";

const Categories = ({ categories }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900">
          Categorias
        </h2>
        {Object.keys(categories).length === 0 && (
          <p className="text-center">Carregando...</p>
        )}
        {Object.keys(categories).length !== 0 && (
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:gap-4">
            {categories.map((item) => (
              <Category
                key={item.url}
                category={item.category}
                url={item.url}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
