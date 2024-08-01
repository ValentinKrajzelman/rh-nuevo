import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Modal from "./modal";
import Clima from "./clima";
import { fetchCurrentClima } from "../../api/clima";
import { fetchCurrentNoticias, fetchDeleteNoticias } from "../../api/noticias";
import {
  fetchCurrentNovedades,
  fetchDeleteNovedades,
} from "../../api/novedades";
import Cultura from "./noticias";
// import textura1 from "/textura1.jpg"

import axios from "axios";

const Inicio = () => {
  const [noticias, setNoticias] = useState([]);
  const [clima, setClima] = useState([]);
  const [novedades, setNovedades] = useState([]);
  const [cultura, setCultura] = useState([]);
  const [user, setUser] = useState({});
  const [RH, setRH] = useState(false);

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
    if (
      legajo == "0003" ||
      legajo == "0868" ||
      legajo == "0046" ||
      legajo == "0500" ||
      legajo == "0926"
    ) {
      setRH(true);
    }
  }, [location]);

  const currentClima = async () => {
    await fetchCurrentClima().then((res) => {
      setClima(res.data);
    });
  };
  const currentNoticias = async () => {
    await fetchCurrentNoticias().then((res) => {
      setNoticias(res.data);
    });
  };
  const currentNovedades = async () => {
    await fetchCurrentNovedades().then((res) => {
      setNovedades(res.data);
    });
  };

  const borrarAnuncio = async (anuncio) => {
    await fetchDeleteNovedades(anuncio).then((res) => {
      console.log(res);
      currentNovedades();
    });
  };

  const borrarNoticia = async (noticia) => {
    await fetchDeleteNoticias(noticia).then((res) => {
      console.log(res);
      currentNovedades();
    });
  };

  const popularCultura = async () => {
    console.log("algo");
    await axios
      .get("https://mmxapp2.mercomaxsa.com.ar/node/cultura/")
      .then((res) => {
        setCultura(res.data.results);
      });
  };

  useEffect(() => {
    currentNoticias();
    currentClima();
    currentNovedades();
    popularCultura();
  }, []);

  return (
    <div className="flex flex-col p-4 px-8 w-full">
      {/* aca va el fondo va a ser animado con las imagenes textura que tenes en public */}
      {/* <div> */}
        {/* <img className="fixed w-screen w-s h-screen z-[-10] top-0 left-0" src="/rh-nuevo/textura1.jpg"></img> */}
      {/* </div> */}
      <div className="flex justify-center text-3xl bold mb-14">
        <img className="w-[20rem]" src="/rh-nuevo/banner-mercomax.png"></img>
      </div>
      {/* primera fila */}
      <div className="flex flex-col md:flex-row w-full md:h-[15rem] justify-center items-center">
        <div className="hidden relative w-[15rem] md:w-[28rem] bg-[#A4A7F6] md:flex flex-col items-center border  m-6 border-black rounded-3xl h-full">
          <div className="text-2xl p-3 font-bold text-white md:h-12">CLIMA</div>
          <div className="p-3 w-full ">
            <Clima clima={clima} />
          </div>
          <div className="absolute z-[-1] left-2 top-2 w-full h-full bg-[#606283] border border-black rounded-3xl"></div>
        </div>
        <div className="hidden relative w-[15rem] md:w-[28rem] md:flex flex-col border bg-[#A4A7F6] items-center m-6 ml-8 border-black rounded-3xl h-full">
          <div className="text-2xl p-3 font-bold text-white md:h-12">
            Noticias
          </div>

          <div className="md:h-[10rem] w-full p-3 ">
            <Cultura CulturaArray={cultura} />
          </div>
          <div className="absolute z-[-1] left-2 top-2 w-full h-full bg-[#606283] border border-black rounded-3xl"></div>
        </div>
      </div>
      {/* segunda fila */}
      <div className="flex flex-col md:flex-row w-full md:h-[15.6rem] justify-center items-center mt-14">
        <div className="relative w-[22rem] md:w-[28rem] flex flex-col bg-[#A4A7F6] m-6 border  items-center border-black rounded-3xl h-full">
          <div className="text-2xl p-3 bold font-bold text-white h-14">
            Beneficios
          </div>
          <div className="absolute z-[-1] left-2 top-2 w-full h-full bg-[#606283] border border-black rounded-3xl"></div>
          <div className="flex flex-col p-2 w-full items-center grow">
            <div className="flex noScrollbar flex-col items-center border  overflow-y-scroll border-black bg-[#9FE96E] h-[10rem] grow rounded-3xl">
              {novedades.map((anuncio) => {
                return (
                  <div
                    key={anuncio.id.toString()}
                    className=" bg-[#FFFFFF] border  relative border-black m-2 rounded-3xl p-2 "
                  >
                    <div className="flex justify-between w-full">
                      <div className="flex flex-col pr-5">
                        <div className="flex align-middle justify-between">
                          <div className="text-lg">{anuncio.titulo}</div>
                          <div className="text-xs align-middle pt-2">
                            {anuncio.fecha.toString().slice(0, 10)}
                          </div>
                        </div>
                        <div className="text-sm">{anuncio.contenido}</div>
                      </div>
                      {!RH ? (
                        <div className="hidden"></div>
                      ) : (
                        <button
                          onClick={() => {
                            borrarAnuncio(anuncio);
                          }}
                          className="absolute top-[0.35rem] right-[0.35rem] "
                        >
                          <img
                            className="w-5"
                            src="/rh-nuevo/tacho.svg"
                            alt="asdf"
                          />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="hidden relative w-[15rem] md:w-[28rem] md:flex flex-col m-6 border bg-black border-black rounded-3xl">
          <video
            className="rounded-3xl"
            src="https://mmxapp2.mercomaxsa.com.ar/files/Mercomax-Reglamento.webm"
            controls
            style={{ width: "443px", height: "250px" }}
          ></video>
          <div className="absolute z-[-1] left-2 top-2 w-full h-full bg-[#606283] border border-black rounded-3xl"></div>
        </div>
      </div>
      <div>
        <div className="flex justify-center space-x-3">
          <Modal noticias={noticias} deleteNoticia={borrarNoticia} RH={RH} />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
