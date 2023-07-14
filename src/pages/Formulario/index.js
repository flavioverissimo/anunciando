import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";
import { useWriteData } from "../../database";
import InternalHeader from "./../../components/InternalHeader";

const INITIAL_STATE = {
  src: "",
  item: "",
  description: "",
  price: "",
  seller: "",
  contact: "",
  category: "",
};

const NewAnnouncement = ({ categories }) => {
  const [data, setData] = useState(INITIAL_STATE);
  const [selectedFile, setSelectedFile] = useState();
  const [status, setStatus] = useState("");
  const [saveStatus, saveData] = useWriteData("anuncios");
  const navigate = useNavigate();

  useEffect(() => {
    if (saveStatus === "SUCCESS") {
      return navigate("/");
    }
  }, [saveStatus, navigate]);

  const setDataForm = (evt) => {
    if (evt.target.name === "src" && evt.target.files[0].name !== "") {
      const src =
        "https://firebasestorage.googleapis.com/v0/b/anunciaki-web.appspot.com/o/" +
        evt.target.files[0].name +
        "?alt=media";
      setData((old) => {
        return {
          ...old,
          src,
        };
      });
      setSelectedFile(evt.target.files[0]);
    } else {
      setData((old) => {
        return {
          ...old,
          [evt.target.name]: evt.target.value,
        };
      });
    }
  };

  const saveFormData = async () => {
    try {
      const storageRef = await ref(storage, selectedFile.name);
      const res = await uploadBytes(storageRef, selectedFile);
      if (Object.keys(res).length > 0) {
        await setStatus("SUCCESS");
        await saveData(data);
        await setData(INITIAL_STATE);
      } else {
        throw new Error("Não foi possível salvar os dados");
      }
    } catch (err) {
      setStatus("FAILED");
    }
  };

  return (
    <div>
      <InternalHeader />
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl text-center mb-12">Formulário de Anúncio</h2>
        {(status === "FAILED" || saveStatus === "ERROR") && (
          <div
            className="mb-12 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
            role="alert"
          >
            <p className="font-bold">Informação</p>
            <p>Não foi possível salvar os dados</p>
          </div>
        )}
        <div className=" w-3/5 flex flex-col gap-6 mx-auto">
          <div className="flex flex-col gap-1">
            <label htmlFor="src" className=" font-medium">
              Foto
            </label>
            <input
              className="bg-gray-100 py-1 px-2 outline-orange-600"
              type="file"
              name="src"
              id="src"
              onChange={setDataForm}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="item" className=" font-medium">
              Item
            </label>
            <input
              className="bg-gray-100 py-2 px-2 outline-orange-600"
              type="text"
              name="item"
              id="item"
              value={data.item}
              onChange={setDataForm}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="item" className=" font-medium">
              Categoria
            </label>
            <select
              className="bg-gray-100 py-2 px-2 outline-orange-600"
              name="category"
              id="category"
              onChange={setDataForm}
            >
              {Object.keys(categories).length > 0 &&
                Object.keys(categories).map((item) => (
                  <option key={item} value={categories[item].url}>
                    {categories[item].category}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="description" className=" font-medium">
              Descrição
            </label>
            <input
              className="bg-gray-100 py-2 px-2 outline-orange-600"
              type="text"
              name="description"
              id="description"
              value={data.description}
              onChange={setDataForm}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="price" className=" font-medium">
              Preço
            </label>
            <input
              className="bg-gray-100 py-2 px-2 outline-orange-600"
              type="text"
              name="price"
              id="price"
              value={data.price}
              onChange={setDataForm}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="seller" className=" font-medium">
              Nome do Vendedor
            </label>
            <input
              className="bg-gray-100 py-2 px-2 outline-orange-600"
              type="text"
              name="seller"
              id="seller"
              value={data.seller}
              onChange={setDataForm}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="contact" className=" font-medium">
              Contato do Vendedor
            </label>
            <input
              className="bg-gray-100 py-2 px-2 outline-orange-600"
              type="text"
              name="contact"
              id="contact"
              value={data.contact}
              onChange={setDataForm}
            />
          </div>
          <button
            onClick={saveFormData}
            className="bg-orange-600 py-4 text-xl font-semibold text-white"
          >
            Anunciar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewAnnouncement;
