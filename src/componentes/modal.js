import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import categorias from "../const/categorias.js";

const Modal = ({ noticias }) => {
  const [estado, setEstado] = useState(false);
  const [actual, setActual] = useState({ img: null, w: 0, h: 0 });

  const handleClick = (imagen, w, h) => {
    setActual({
      img: imagen,
      w: w,
      h: h,
    });
    setEstado(true);
  };
  return (
    <div>
    { !noticias[0] ? (<div>cargando...</div>):(
    <div className="flex flex-col justify-center space-x-1 space-y-1">
      {categorias.map((categoria, index) => {
        return (
          <div
            key={"categoria " + index}
            className="flex flex-col justify-center items-center"
          >
            <div className="text-3xl bold py-5">{categoria.categoria}</div>
            <div className="flex flex-wrap items-center justify-center">
              {noticias.filter((noticia)=>{return noticia.categoria == categoria.categoria}).map((imagen, index) => {
                return (
                  <button
                    className="overflow-clip"
                    key={"imagen " + index}
                    onClick={() => {
                      handleClick(imagen.url, imagen.w, imagen.h);
                    }}
                  >
                    <div
                      className={
                        imagen.w < imagen.h
                          ? "w-[12rem] h-[17rem]  "
                          : "w-[17rem] h-[12rem] "
                      }
                    >
                      <img
                        src={imagen.url}
                        alt={imagen.nombre}
                        width={imagen.w}
                        height={imagen.h}
                      />
                    </div>
                  </button>
                );
              })}
              
            </div>
          </div>
        );
      })}

      {!estado ? (
        <div className="hidden"></div>
      ) : (
        <Transition.Root show={true} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => {
              setEstado(false);
            }}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 h-[36rem] sm:p-6">
                    <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                      <button
                        type="button"
                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => {
                          setEstado(false);
                        }}
                      >
                        <span className="sr-only">Close</span>
                      </button>
                    </div>

                    <div className="w-[40rem] h-[34rem] flex justify-center items-center">
                      {actual.w > actual.h ? (
                        <img
                          className="w-[90%] h-auto"
                          src={actual.img}
                          alt="404"
                          width={actual.w}
                          height={actual.h}
                        />
                      ) : (
                        <img
                          className="h-[90%] w-auto"
                          src={actual.img}
                          alt="404"
                          width={actual.w}
                          height={actual.h}
                        />
                      )}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </div> 
    )
  }
  </div>
  )
};

export default Modal;
