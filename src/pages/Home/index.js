import Hero from "./Hero";
import ProductCard from "./ProductCard";
import Categories from "./Categories";

const Home = ({ categories }) => {
  return (
    <div>
      <Hero />
      <ProductCard />
      <Categories categories={categories} />
    </div>
  );
};

export default Home;
