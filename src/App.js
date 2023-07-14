import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewAnnouncement from "./pages/Formulario";
import Footer from "./components/Footer";
import Categories from "./pages/Categories";
import { useGetdata } from "./database";

function App() {
  const categories = useGetdata("categories");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home categories={categories} />} />
        <Route
          path="/novo-anuncio"
          element={<NewAnnouncement categories={categories} />}
        />
        <Route
          path="/categories/:id"
          element={<Categories categories={categories} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
