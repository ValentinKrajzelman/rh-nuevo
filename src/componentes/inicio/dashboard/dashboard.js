import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

import categorias from "../../../const/categorias";

import { fetchPostNovedades } from "../../../api/novedades";

const Dashboard = () => {
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");

  const [imagen, setimagen] = useState("");
  const [categoria, setcategoria] = useState(categorias[0].categoria);

  const [user, setUser] = useState({});

  let location = useLocation();

  useEffect(() => {
    let urlParams = new URLSearchParams(window.location.search);
    let nombre = urlParams.get("a");
    let apellido = urlParams.get("b");
    let legajo = urlParams.get("c");
    setUser({
      nombre: nombre,
      apellido: apellido,
      legajo: legajo,
    });
  }, [location]);

  const handleSubmitNoticias = () => {
    const noticia = {
      titulo: titulo,
      contenido: texto,
    };
    fetchPostNovedades(noticia);
  };

  // const handleSubmitImagenes = ()=>{
  //   const noticia = {
  //     titulo: titulo,
  //     contenido: texto
  //   }

  //   fetchPostNovedades(noticia);
  // }

  const handleSubmitImagenes = () => {
    const formData = new FormData();
    formData.append("file", imagen);
    formData.append("categoria", categoria);

    fetch("https://mmxapp2.mercomaxsa.com.ar/node/rhNoticias/one", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      // .then(data => console.log(data))
      .catch((error) => console.error("Error uploading file:", error));
  };

  return (
    <div>
      {!(user.legajo == "0003" ||
      user.legajo == "0868" ||
      user.legajo == "0046" ||
      user.legajo == "0500" ||
      user.legajo == "0926") ? (
        <div> no credentials </div>
      ) : (
        <div className="p-24 w-[45rem]">
          {/* noticias */}

          <div className="space-y-12 mb-5">
            <div className="border-b border-gray-900/10 pb-12">
              <h1 className="text-3xl font-semibold leading-7 text-gray-900">
                Noticias
              </h1>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Titulo
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Hoy Mercomax.."
                        onChange={(e) => {
                          setTitulo(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-full mt-5">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Texto
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                    onChange={(e) => {
                      setTexto(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-end mt-5">
                <button
                  onClick={() => {
                    handleSubmitNoticias();
                  }}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* imagenes */}
          <div>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h1 className="text-3xl font-semibold leading-7 text-gray-900 mb-5">
                  Imagenes
                </h1>

                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Imagen
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={(e) => {
                              setimagen(e.target.files[0]);
                            }}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Categoria
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  onChange={(e) => {
                    setcategoria(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {categorias.map((categoria) => {
                    return <option>{categoria.categoria}</option>;
                  })}
                </select>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                onClick={() => {
                  handleSubmitImagenes();
                }}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
